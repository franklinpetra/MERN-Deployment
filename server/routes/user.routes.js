const UserController = require("../controllers/user.controller");

module.exports = function(app){
    app.get("/api/users", UserController.allUsers);
    app.post("/api/user", UserController.createUser);
    app.get("/api/user/:id", UserController.oneUser);
    app.put("/api/user/:id", UserController.updateUser);
    app.delete("/api/user/:id", UserController.deleteUser);
}
