const todomodule = require('../models/task.model')


async function createtodo(req,res) {

    const {title , detail}= req.body;

    const todo = await todomodule.create({title , detail});

    req.user.todos.push(todo._id)
    await req.user.save();
    res.status(202).json({message:'todo created sucessfully',
        todo:{
            title:todo.title,
            detail:todo.detail
        }
        
    })

    
}

async function updateTodo(req , res) {
    const { id } = req.params;
    const { title, detail } = req.body;
    console.log(id,title,detail)

    const todo = await todomodule.findOneAndUpdate(
        { _id: id },
        { title, detail },
        { returnDocument: "after" }
    );

    res.status(200).json(todo);
}

async function deleteTodo(req , res) {
    const { id } = req.params;
    const todo = await todomodule.findByIdAndDelete(id);
    res.status(200).json({message:'todo deleted sucessfully'})
}

async function gettodo(req , res) {
    const todos = await todomodule.find();

    res.status(200).json(todos)
    
}


module.exports = {createtodo , gettodo, updateTodo ,deleteTodo}