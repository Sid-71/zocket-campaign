const Task = require("../models/Task");


const createTask = async(req,res)=>{
    try {
        const payload = req.body;
        const data = await Task.create(payload);
        res.status(201).send({
            message : "your task is created",
            data : data
        })
    } catch (error) {
        res.status(400).send({
            error : error.message,
            stack : error.stack
        })
    }
}

const getTask = async(req,res)=>{
    try {
        const data = await Task.find();
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({
            error : error.message,
            stack : error.stack
        })
    }
}

module.exports = {
createTask,
getTask,

}