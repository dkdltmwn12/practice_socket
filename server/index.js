const app = require('express')()
const server = require('http').createServer(app)
const cors = require('cors')
const {addUser, removeUser, getUser, getUsersInRoom} = require('./users.js')
const io = require('socket.io')(server,{
    cors : {
        origin :"*",
        credentials :true
    }
});

io.on('connection', (socket) => {
    socket.on('join', ({name, room}, callback) => {
        const {error, user} = addUser({id: socket.id, name, room});

        if(error) return callback(error);

        socket.emit('message', {user: 'admin', text: `${user.name}님, ${user.room}방에 오신걸 환영해요!`})
        socket.broadcast.to(user.room).emit('message', { user : 'admin', text: `${user.name}님이 입장하셨습니다.`})
        
        socket.join(user.room);

        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)})
        callback();
    })

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id)

        io.to(user.room).emit('message', {user : user.name, text : message})
    
        callback();
    })

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);

        if(user) {
            io.to(user.room).emit('message', {user: 'admin', text: `${user.name}님이 퇴장하셨습니다.`})
            io.to(user.room).emit('roomData', {room: user.room, users: getUsersInRoom(user.room)})
        }
    })
})

server.listen(4000)