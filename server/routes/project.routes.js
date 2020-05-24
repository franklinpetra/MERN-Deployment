const ProjectController = require("../controllers/project.controller");

module.exports = function(app){
    app.get("/api/projects", ProjectController.allProjects);
    app.post("/api/project", ProjectController.createProject);
    app.get("/api/project/:id", ProjectController.oneProject);
    app.put("/api/project/:id", ProjectController.updateProject);
    app.delete("/api/project/:id", ProjectController.deleteProject);
}
