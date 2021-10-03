const express = require('express');
const expresslayouts = require('express-ejs-layouts');
const cookieparser = require('cookie-parser')

const app = express();
const port = 5000;


//static files
app.use(express.static('public'));
app.use('/css',express.static(__dirname+'public/css'));
app.use('/img',express.static(__dirname+'public/img'));
app.use('/js',express.static(__dirname+'public/js'));

//templating engine
app.use(expresslayouts);
app.set('layout','./layouts/full-width');
app.set('views','./src/views');
app.set('view engine','ejs')


//routes
const indexRouter =  require('./src/routes/index');
const contactRouter = require('./src/routes/contact');
app.use('/',indexRouter);
app.use('/contact',contactRouter);

//Listen on port 5000
app.listen(port,()=>console.log('Litening on port ${port}'));