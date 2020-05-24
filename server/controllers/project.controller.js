const { Project} = require("../models/project.model")

module.exports.allProjects = (request, response) => {
    Project.find()
        .then(allProjects => response.json({Projects: allProjects}))
        .catch(err => response.json({ message: "Houston, we have a situation!", error: err}))
};

module.exports.createProject = (request, response) => {
    const {name,date} = request.body;
    Project.create({
        name,
        date,
        status,
    })
        .then(Project => response.json(Project))
        .catch(err => response.status(400).json(err))
};

module.exports.oneProject = (request, response) => {
    Project.find({_id: request.params.id})
        .then(oneProject => response.json({ Project: oneProject}))
        .catch(err => response.json({ message: "Houston, we have a situation!", error: err}))
};

module.exports.updateProject = (request, response) => {
    Project.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedProject => response.json(updatedProject))
        .catch(error => response.status(400).json(error))
}

module.exports.deleteProject = (request, response) => {
    Project.deleteOne({_id: request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(error => response.json(error))
}
