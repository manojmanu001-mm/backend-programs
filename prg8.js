const express = require("express");
const app = express();
app.use(express.json());

const VALID_USERNAME = "admin";
const VALID_PASSWORD = "admin123";

app.post("/api/login",(req,res)=>{
    const{ username , password } = req.body;

    if(!username || !password){
        return res.status(400).json({
            success:false,
            message:"username and password are required"
        });
    }
    if(
        username === VALID_USERNAME &&
        password === VALID_PASSWORD
    ){
        return res.status(200).json({
            success:true,
            message:"login successfull"
        });
    }
    return res.status(401).json({
        success:false,
        message:"invalid username or password"
    });
    });

   const PORT = 3000;
   app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`);
});