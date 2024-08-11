
const express = require('express');

const singup = require("../controller/User");

const router = express.Router();


router.post("/create",singup);


module.exports = router;


