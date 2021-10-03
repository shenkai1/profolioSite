const express = require('express');
const indexRouter = express.Router();

indexRouter.get('',(req,res)=>{
    res.render('index',{title:'Home',
                        name:'shenkai feng',
                        code:'HTML/CSS/Javascript'});
});

indexRouter.get('/service',(req,res)=>{
    res.render('service',{title:'Service'});
});

indexRouter.get('/about',(req,res)=>{
    res.render('about',{title:'About'});
});
indexRouter.get('/product',(req,res)=>{
    res.render('product',{title:'Product'});
});

module.exports = indexRouter;