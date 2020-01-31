var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');
//var helmet = require('helmet');
//var morgan = require('morgan');
var index = require('./routes/index');
var post = require('./routes/post');

var app = express();
//server
const port = 3000 || 5000;
app.listen(port, () => console.log('App is running on port: ' + port));

//Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//other middlewares
//app.use(helmet());
app.use(cors());
//app.use(morgan('tiny'));

//routes
app.use('/', index);
app.use('/api', post);
