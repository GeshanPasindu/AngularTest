const userRouter = require("express").Router()
const{addUser,getUser} = require("../controllers/userController")

userRouter.post("/addUser",addUser);
userRouter.get('/getUser/:email',getUser)

module.exports = userRouter