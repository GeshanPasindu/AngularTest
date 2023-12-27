const userRouter = require("express").Router()
const{addUser,getUser, updatePassword} = require("../controllers/userController")

userRouter.post("/addUser",addUser);
userRouter.get('/getUser/:email',getUser);
userRouter.patch('/resetpassword',updatePassword);

module.exports = userRouter