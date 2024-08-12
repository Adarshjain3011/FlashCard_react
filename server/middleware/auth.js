const jwt = require("jsonwebtoken");
require("dotenv").config();

// Middleware for role-based authentication
exports.Auth = (roles = []) => {
    return async (req, res, next) => {
        try {
            // Look for the token in the Authorization header, body, or cookies
            const token = req.headers.authorization?.split(" ")[1] || req.body.token || req.cookies.AccessToken;

            if (!token) {
                return res.status(401).json({
                    success: false,
                    data: null,
                    message: "Token not found",
                });
            }

            // Verify the token
            const tokenData = jwt.verify(token, process.env.JWT_SECRET);

            if (!tokenData) {
                return res.status(401).json({
                    success: false,
                    data: null,
                    message: "Invalid token",
                });
            }

            // Attach the token data (user info) to the request object
            req.user = tokenData;

            // Check if the user has the required role
            if (roles.length && !roles.includes(req.user.role)) {
                return res.status(403).json({
                    success: false,
                    data: null,
                    message: "Access denied: Insufficient role",
                });
            }

            // Proceed to the next middleware or route handler
            next();
        } catch (error) {
            console.error("Error during authentication:", error);

            return res.status(401).json({
                success: false,
                data: null,
                message: "There was an error while accessing the token",
                error: error.message,
            });
        }
    };
};


