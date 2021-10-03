
const express = require('express');
const contactRouter = express.Router();

contactRouter.get('',(req,res)=>{
    res.render('contact',{title:'Contacts',
                        email:'max12@gmail.com',
                        address:'941 Progress Ave, Scarborough, ON M1G 3T8',
                        phone:'(416) 289-5000'});
})


module.exports = contactRouter;