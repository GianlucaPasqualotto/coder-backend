const { request, response } = require("express");
const express = require("express");
const app = express();
const fruitRouter = require("./routes/fruits");
const {userRouter} = require("./routes/users");

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//archivos estaticos
app.use("/archivos", express.static(__dirname + "/public"))



app.listen(8080,()=>console.log("Server is listening on port 8080"))

app.use("/fruits", fruitRouter);
app.use("/user", userRouter);

