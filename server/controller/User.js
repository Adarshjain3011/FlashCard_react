

require('dotenv').config();

async function signup(req, res) {
    try {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password || !role) {
            return res.status(400).json({
                success: false,
                data: null,
                message: "All fields are required"
            });
        }

        // Check if the user already exists by email
        const findUser = await User.findOne({ where: { email } });

        if (findUser) {
            return res.status(400).json({
                success: false,
                data: null,
                message: "User with this email already exists"
            });
        }

        // Hash the password before saving (using bcrypt, for example)
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            role
        });

        // Successfully return the response
        return res.status(201).json({
            success: true,
            data: newUser,
            message: "User signup successful"
        });

    } catch (e) {
        console.error("Error:", e.message);
        return res.status(500).json({
            success: false,
            data: null,
            message: e.message
        });
    }
}



async function login(req, res) {

    try {

        const { email, password } = req.body;

        if (!email || !password) {

            return res.status(400).json({

                success: false,
                data: null,
                message: "All fields are required"

            });
        }


        // Check if the user already exists by email

        const findUser = await User.findOne({ where: { email } });

        if (!findUser) {
            return res.status(400).json({
                success: false,
                data: null,
                message: " no User exists  with this email"
            });
        }

        // Compare the provided password with the hashed password from the database

        const match = await bcrypt.compare(password, findUser.password);

        if (!match) {
            return res.status(400).json({
                success: false,
                data: null,
                message: "Invalid password"
            });
        }

        // Create a JSON Web Token (JWT) with the user's ID

        const token = jwt.sign({ id: findUser.id }, process.env.JWT_SECRET, { expiresIn: '8h' });

        
        const response = res.status(200).json({
            message: "Authentication successful",
            status: 200,
        });

        response.cookies.set("token", token, {
            httpOnly: true,
        });

        return response;


    } catch (error) {

        console.error("Error:", error.message);

        return res.status(500).json({
            success: false,
            data: null,
            message: error.message
        });
    }
}





async function getUser(req, res) {


    try{


        const {userId} = req.params;

        if(! userId){

            return res.status(400).json({

                success: false,
                data: null,
                message: "User ID is required"

            })
        }

        const findUser = await User.findOne({ where: { email } });

        if (!findUser) {
            return res.status(400).json({
                success: false,
                data: null,
                message: " no User exists  with this id "
            });
        }

        return res.status(200).json({
            success: true,
            data: findUser,
            message: error.message
        });



    }catch(error){

        console.error("Error:", error.message);

        return res.status(500).json({
            success: false,
            data: null,
            message: error.message
        });

    }
}

module.exports = {

    signup,
    login,
    getUser
 };





