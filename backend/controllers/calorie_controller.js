// Developers:
//1. Adi Hershko, id: 208729814
//2. Ori Amrani, id: 206752313

import Calorie from "../../DB/models/calorie_model.js";
import User from "../../DB/models/user_model.js";

async function getReport(req, res) {
    try {
        const { year, month, userID: userID } = req.query;
        // Check if all required query parameters are present
        if (!year || !month || !userID) {
            return res.status(400).json({ message: 'Missing required query parameters' });
        }
        // Check if year is a valid number
        if (parseInt(month) < 1 || parseInt(month) > 12) {
            return res.status(400).json({ message: 'Invalid month value' });
        }
        // Check if a user with the given ID exists
        if (!await User.findOne({ id: userID })) {
            return res.status(404).json({ message: 'User not found' });
        }

        const results = await Calorie.find({
            year: parseInt(year),
            month: parseInt(month),
            userID: parseInt(userID)
        });


        const groupedEntries = {
            breakfast: [],
            lunch: [],
            dinner: [],
            other: []
        };

        results.forEach(result => {
            const entry = {
                day: result.day,
                description: result.description,
                amount: result.amount
            };
            groupedEntries[result.category].push(entry);
        });
        res.status(200).json(groupedEntries);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


async function addCalories(req, res) {
    const { userID, year, month, day, description, category, amount } = req.body;
    const isExisting = await User.findOne({ id: userID });
    if (!isExisting) {
        return res.status(404).json({ message: 'User not found' });
    }
    try {
        const newEntry = new Calorie({
            user_id: userID,
            year: year,
            month: month,
            day: day,
            description: description,
            amount: amount,
            category: category
        })
        await newEntry.save();
        res.status(201).json({ message: 'New calorie entry added', data: newEntry });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

export { getReport, addCalories };