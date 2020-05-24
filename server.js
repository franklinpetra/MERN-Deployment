const express = require("express")
const cors = require("cors");
const app = express()
const port = 8000

require("./server/config/mongoose.config");

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Routes must come afer the lines above:
require("./server/routes/user.routes")(app);
require("./server/routes/project.routes")(app);

app.listen(8000, ()=>console.log("The server is all fired up and listening on port 8000"))
