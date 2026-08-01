const express = require('express')
const todocontroller = require('../controller/todo.controller')
const  authmiddleware  = require('../middelware/auth.middleware');

const router = express.Router();



router.post('/todo/create',authmiddleware.authmiddleware,todocontroller.createtodo);
router.get('/todo/get',authmiddleware.authmiddleware,todocontroller.gettodo);
router.put('/todo/update/:id',authmiddleware.authmiddleware,todocontroller.updateTodo);
router.delete('/todo/delete/:id',authmiddleware.authmiddleware,todocontroller.deleteTodo);


module.exports= router;