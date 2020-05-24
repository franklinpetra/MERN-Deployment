const mongoose = require("mongoose")

// this line enables validators to run on update
mongoose.set("runValidators", true);

mongoose.connect("mongodb://localhost/projectsdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("The projectdb is connected to the Project KanBan"))
    .catch(err => console.log("There was an error", err))
