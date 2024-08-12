
const express = require('express');

const {signup,login,getUser} = require("../controller/User");

const {createCategory, getCategories, getCategoryById, updateCategory, deleteCategory} = require("../controller/Category");

const {createQuestion, getQuestions, getQuestionById, updateQuestion, deleteQuestion} = require("../controller/Question");



const router = express.Router();


// user specific routes



router.post("/signup",singup);

router.post("/login",login);

router.get("/user",getUser);




// category routes 


router.post("/category",createCategory);

router.get("/categories",getCategories);

router.get("/category/:id",getCategoryById);


router.put("/category/:id",updateCategory);

router.delete("/category/:id",deleteCategory);


// Question routes 


router.post("/question",createQuestion);

router.get("/questions",getQuestions);

router.get("/question/:id",getQuestionById);

router.put("/question/:id",updateQuestion);

router.delete("/question/:id",deleteQuestion);





module.exports = router;


