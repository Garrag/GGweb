/**
 * Created by Dall on 16/3/13.
 * 游戏服务器后台
 */
module.exports = function (io) {
    io.sockets.on('connection', function (socket) { //链接监听
        //socket.emit('news', {hello: 'world'});
        socket.on('login', function (data) {
            socket.broadcast.emit('join', {name:data.name});
        });

        socket.on('move', function (data) {
            socket.broadcast.emit('move', data);
        });

    });
};