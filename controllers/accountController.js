const account = require('../services/accountService')
const bcrypt = require('brcypt')
module.exports={
    login:async(req, res)=>{
        const { email, password}= req.body
        console.log(req.body)
        if(!(email && password)) return res.status(400).json({message:"infomation hollow"})
        else{
            const check_info = await check_info(email, password)
            if(!check_info) return res.status(400).json({message:"infomation hollow"})
            else{
                return res.status(200).json({check_info})
            }
        }
    },
    add:async(req, res)=>{

    }
}