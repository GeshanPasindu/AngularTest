const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const db = require("./models")
const userRouter = require('./routers/userRouter')

app.use(cors());
app.use(express.json());
app.use('/user',userRouter)

db.sequelize.sync({alter:true}).then((req)=>{
    app.listen(process.env.PORT,()=>{
        console.log("server up and running on: "+process.env.PORT);
        console.log("db connected")
    });
})
