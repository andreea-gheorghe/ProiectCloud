const express = require('express');
const cors=require('cors');
const bodyParser=require("body-parser");
const messagesRouter=require('./messagesRouter');
const router =require('./utils/router');

const app=express();
app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extened:true}));

app.use("/messages",messagesRouter);
app.use("/utils", router);

const port= process.env.PORT||8080;


app.listen(port, ()=>{
    console.log(`Cloud computing app listening on port ${port}!`)
});