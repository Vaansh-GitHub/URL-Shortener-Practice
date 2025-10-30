const express=require("express");
const {connectMongoDb}=require("./connection");
const {router}= require("./routes/urlRoutes")
const {URL}=require("./models/urlModels")

const app=express();
const PORT=8000;
//Making Connections to DB
connectMongoDb("mongodb://127.0.0.1:27017/short-url");

//Middlewares
app.use(express.json());

//Routes
app.use("/url",router)
app.get("/:id", async (req,res)=>{
    const short_url=req.params.id;
    const result=await URL.findOneAndUpdate({short_url},{
        $push:{
            times_visited:{timestamps:Date.now()}
        }})
    res.redirect(result.url);
})//I have written this get request here as because if i add it in urlRoutes it will be shown as /url/:id which has no request here

app.listen(PORT,()=>{console.log('Server started at PORT ',PORT);});