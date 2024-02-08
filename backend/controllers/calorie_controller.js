import Calorie from "../../DB/models/calorie_model.js";
import User from "../../DB/models/user_model.js";

async function getReport(req, res) {
    try {
        const { year, month, user_id } = req.query;

        if (!year || !month || !user_id) {
            return res.status(400).json({ message: 'Missing required query parameters' });
        }

        if (parseInt(month) < 1 || parseInt(month) > 12) {
            return res.status(400).json({ message: 'Invalid month value' });
        }

        if (!await User.findOne({ id: user_id })) {
            return res.status(404).json({ message: 'User not found' });
        }

        const results = await Calorie.find({ 
            year: parseInt(year), 
            month: parseInt(month), 
            user_id: parseInt(user_id) 
        });
        
        if (results.length === 0) {
            return res.status(404).json({ message: 'No entries found' });
        }
        
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



async function addCalories(req, res){
    const { user_id, year, month, day, description, category, amount } = req.body;
    console.log(req.body);
    const isExisting = await User.findOne({ id: user_id });
    if (!isExisting) {
        return res.status(404).json({ message: 'User not found' });
    }    
    try{
        const newEntry = new Calorie({
            user_id: user_id,
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