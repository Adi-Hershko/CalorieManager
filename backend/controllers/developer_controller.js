// Developers:
//1. Adi Hershko, id: 208729814
//2. Ori Amrani, id: 206752313

import Developer from "../../DB/models/developer_model.js";

async function createDeveloper(req, res){
    try {
        const newDeveloper = new Developer(req.body);
        await newDeveloper.save();
        res.status(201).json(newDeveloper);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

async function getDevelopers(req, res){
    try {
        const developers = await Developer.find().select('-_id -__v');
        res.status(200).json(developers);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export { createDeveloper, getDevelopers };