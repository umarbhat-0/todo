const express = require('express');
const aoutcontroller = require('../controller/auth.controller');


const router = express.Router();


router.post("/user/register",aoutcontroller.createuser);
router.post("/user/login",aoutcontroller.loginuser);
router.get("/user/logout",aoutcontroller.logout);


module.exports = router;