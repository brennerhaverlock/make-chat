//app.js
const express = require('express');
const app = express();
const server = require('http').Server(app);
const exphbs  = require('express-handlebars');

//Express View Engine for Handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
//Establish your public folder
app.use('/public/views', express.static('public'))


app.get('/', (req, res) => {
  res.render('main.handlebars');
})

//Socket.io
const io = require('socket.io')(server);
let onlineUsers = {};
io.on("connection", (socket) => {
  console.log("🔌 New user connected! 🔌");
  require('./sockets/chat.js')(io, socket, onlineUsers, channels);
})

server.listen('3000', () => {
  console.log('Server listening on Port 3000');
})