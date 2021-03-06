'use strict'
const express         = require('express');
const path            = require('path');
const logger          = require('morgan');
const bodyParser      = require('body-parser');
const session         = require('express-session');
const methodOverride  = require('method-override');
const homeRoute       = require('./routes/home');
const userRoute       = require('./routes/user');
const nameRoute       = require('./routes/name');
const aboutRoute       = require('./routes/about');

const app             = express();
const port            = process.env.PORT || 3000;
//added from caspertuna



// app.post('/quotes', (req,res)=>{
//   db.collection('quotes').save(req.body, (err, result)=>{
//     if (err) throw err;
//     // console.log('i saved an item!')
//     res.redirect('/')
//   })
//   // console.log(req.body);
// })


// Adding session as a middleware
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'sooopersekret',
  cookie: {maxAge: 60000}
}));

// Adding Method override to allow our form to delete
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.use(bodyParser.json())
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));
app.use('/bower_components', express.static(path.join(__dirname,'/bower_components')))

app.use('/', homeRoute);
app.use('/user', userRoute);
app.use('/name', nameRoute);
app.use('/about', aboutRoute);
app.listen(port, function() {
  console.log('Server is listening on ',port);
})
