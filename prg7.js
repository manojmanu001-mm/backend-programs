const express = require("express");
const app = express()
app.use(express.json());
let tasks =[];

app.post("/tasks",(req,res)=>{
    const {title,status}=req.body;
    tasks.push({
        title:title,
        status:status
    });

    res.json({
        message:"Task added successfully"
    });
});

app.get("/tasks",(req,res)=>{
    res.json(tasks);
});


app.listen(3000,()=>{
    console.log("server running on http://localhost:3000");       
});