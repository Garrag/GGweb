/**
 * Created by Dall on 16/3/13.
 * 游戏服务器后台
 */
module.exports = function (io) {
    io.sockets.on('connection', function (socket) { //链接监听
        //socket.emit('news', {hello: 'world'});
        socket.on('login', function (data) {
            //console.log('--------------------------------\n' + data.name);
            socket.broadcast.emit('join', {name:data.name});
        });

        socket.on('move', function (data) {
            console.log('move : ' + data.x + ":" + data.y);
        });

    });
};