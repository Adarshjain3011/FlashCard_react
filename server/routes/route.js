const express = require('express');
const { signup, login, getUser } = require("../controller/User");
const { createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory } = require("../controller/Category");
const { 
    createQuestion,
    updateQuestion,
    getQuestionById,
    getAllQuestion,
    getAllQuestionOfSpecificCategory,
    deleteQuestion
} = require("../controller/Question");
const { Auth } = require("../middleware/auth");

const router = express.Router();

// User-specific routes
router.post("/signup", signup);
router.post("/login", login);
router.get("/user", Auth(), getUser); // Protect the getUser route

// Category routes

router.post("/category", Auth(['admin']), createCategory); // Only admins can create categories
router.get("/getAllCategories", getAllCategories); // Public route
router.get("/category/:id", getCategoryById); // Public route
router.put("/category/:id", Auth(['admin']), updateCategory); // Only admins can update categories
router.delete("/category/:id", Auth(['admin']), deleteCategory); // Only admins can delete categories

// Question routes

router.post("/createQuestion", Auth(['admin']), createQuestion); // Only admins can create questions
router.get("/getAllQuestion", getAllQuestion); // Public route
router.get("/getAllQuestionOfSpecificCategory/:categoryId", getAllQuestionOfSpecificCategory); // Public route
router.get("/getQuestionById/:id", getQuestionById); // Public route
router.put("/updateQuestion/:id", Auth(['admin']), updateQuestion); // Only admins can update questions
router.delete("/deleteQuestion/:id", Auth(['admin']), deleteQuestion); // Only admins can delete questions

module.exports = router;
