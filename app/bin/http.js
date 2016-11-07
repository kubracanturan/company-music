const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compression = require('compression');
const pug = require('pug');
const app = express();
const index = require(path.join(__dirname, '..', 'routes', 'index', 'index.js'));

app.set('views', path.join(__dirname, '..', 'views', 'pages'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'static')));
app.use('/', index);

const http = require('http').Server(app);
var io = require('socket.io')(http);
io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});
http.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});








