const { User} = require("../models/user.model")

module.exports.allUsers = (request, response) => {
    User.find()
        .then(allUsers => response.json({Users: allUsers}))
        .catch(err => response.json({ message: "Houston, we have a situation!", error: err}))
};

module.exports.createUser = (request, response) => {
    // CHANGE THIS TO REFLECT THE PROPERTIES BELONGING TO user
    const {name,email,password,confirm} = request.body;
    User.create({
        name,
        email,
        password,
        confirm,
    })
        .then(User => response.json(User))
        .catch(err => response.status(400).json(err))
};
module.exports.oneUser = (request, response) => {
    User.find({_id: request.params.id})
        .then(oneUser => response.json({ User: oneUser}))
        .catch(err => response.json({ message: "Houston, we have a situation!", error: err}))
};

module.exports.updateUser = (request, response) => {
    User.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedUser => response.json(updatedUser))
        .catch(error => response.status(400).json(error))
}

module.exports.deleteUser = (request, response) => {
    User.deleteOne({_id: request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(error => response.json(error))
}
