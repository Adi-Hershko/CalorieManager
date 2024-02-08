import User from "../../DB/models/user_model.js";

async function createNewUser(req, res) {
  try {
    const newUser = new User(req.body);
    await newUser.save().then(user => {
      console.log("User created: ", user);
      return res.status(201).json(user);
    });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
}

export { createNewUser };