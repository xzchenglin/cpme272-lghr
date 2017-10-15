var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

const index = require('./routes/index');
const users = require('./routes/users');
const auth = require('./routes/auth');

const cors = require("cors");





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
//app.use(express.static('public'));

//first: session, passport initialize, passport session
app.use(session({
  secret: 'any'
}));

app.use(cors());

//thrid: sso strategies
require('./config/strategies/twitter.strategy')(app);



app.use('/', index);
app.use('/users', users);
app.use('/auth', auth);



app.listen(4000)


