
const express = require('express');

const {signup,login,getUser} = require("../controller/User");

const {createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory} = require("../controller/Category");

const { 

    createQuestion,
    updateQuestion,
    getQuestionById,
    getAllQuestion,
    getAllQuestionOfSpecificCategory,
    deleteQuestion

} = require("../controller/Question");



const router = express.Router();


// user specific routes



router.post("/signup",signup);

router.post("/login",login);

router.get("/user",getUser);




// category routes 


router.post("/category",createCategory);

router.get("/getAllCategories",getAllCategories);

router.get("/category/:id",getCategoryById);


router.put("/category/:id",updateCategory);

router.delete("/category/:id",deleteCategory);


// Question routes 


router.post("/createQuestion",createQuestion);

router.get("/getAllQuestion",getAllQuestion);

router.get("/getAllQuestionOfSpecificCategory/:categoryId",getAllQuestionOfSpecificCategory);

router.get("/getQuestionById/:id",getQuestionById);

router.put("/updateQuestion/:id",updateQuestion);

router.delete("/deleteQuestion/:id",deleteQuestion);





module.exports = router;


