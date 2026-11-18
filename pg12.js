const express = require("express");
const app = express();
app.use(express.json());

app.post("/student",(req,res)=>{
    const marks = req.body.marks;
    let feedback;
    let grade;
    if(marks>=90){
        grade = "A+";
        feedback="OUTSTANDING PERFORMANCE!";
    }
    else if(marks>=75){
        grade = "A";
        feedback="excellent performance!";
    }
    else if(marks>=50){
        grade = "B";
        feedback="Good performance. keep improving!";
    }
    else{
        grade="C";
        feedback="Needs improrovment. Work harder!";
    }

    res.status(200).json({
        status:"success",
        message:"student details processed successfully",
        data:{
            marks:marks,
            grade:grade,
            feedback:feedback
        }
    });
});
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
