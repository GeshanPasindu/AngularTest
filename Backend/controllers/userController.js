const {User} = require("../models")
const{hashSync,genSaltSync} = require('bcrypt')

const addUser = async(req,res) =>{
try{
    const salt = genSaltSync(10);
    const body = req.body;
    const password =hashSync(body.password,salt);
     await User.create({
        user_name:body.name,
        email:body.email,
        Contact_no:body.contact,
        password:password

    }).then((response) =>{
        console.log(response)
        response.password = undefined
        res.status(201).json({response})
    }).catch(err =>{
        console.error(err)
        res.status(400).json({error:err})
    })

}catch(err){
console.error(err)
res.status(500).json({
    error:"internal server error occured"
})
}}

const getUser = async(req,res) =>{
    try{
        
        const {email} = req.params
    await User.findOne({where:{email:email, is_deleted:false}}).then(
        (response) =>{
            response.password = undefined
            console.log(response)
            res.status(200).json({response})
        }
    ).catch((err)=>{
        console.error(err)
        res.status(400).json({error:err})
    })
    }catch(err){
        console.error(err)
        res.status(500).json({error:"Internal server error"})
    }}

   const updatePassword = async(req,res) =>{
    try{
        const {password,email} = req.body
        const update = await User.findOne({where:{email:email, is_deleted:false}})
        if(update){
            const newPassword = hashSync(password,genSaltSync(10));
            update.password = newPassword
            const save = update.save().then((response) =>{
                console.log(response)
                res.status(200).json({message:"successfully updated",
                                       response})
            }).catch(err =>{
                console.error(err)
                res.status(400).json({error:"password reset was unsuccessful"})
            })
            
        }else{
            console.log(update)
            res.status(400).json({error:"User not found"})
            
        }

    }catch(err){
        console.log(err);
        res.status(500).json({error:"an error occured"})
    }
   }


module.exports = {addUser,getUser,updatePassword}