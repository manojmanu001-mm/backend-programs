const express = require ('express');
const app = express();

app.use(express.json());
let products =[
    {
        id:1,
        name:"Laptop",
        price:55000
    },
    {
        id:2,
        name:"Mobile phone",
        price:25000
    },
    {
        id:3,
        name:"Headphones",
        price:2000
    }
]

app.get('/products',(req,res)=>{
    res.json(products);
});

app.post('/products',(req,res)=>{

    const newproduct ={
        id:products.length+1,
        name:req.body.name,
        price:req.body.price
    };
    products.push(newproduct);

    res.status(201).json({
        message:"product added successfully",
        product:newproduct
    });
});

app.listen(3000,()=>{
console.log("server running on http://localhost:3000");
})