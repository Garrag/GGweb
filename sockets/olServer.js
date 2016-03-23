/**
 * Created by Dall on 16/3/13.
 * 游戏服务器后台
 */
module.exports = function (io) {
    io.sockets.on('connection', function (socket) { //链接监听
        //console.log('新连接:' + socket);
        for(var k in socket) {
            console.log(k + ' : ' + socket[k]);
        }
        socket.emit('news', { hello: 'world' });
        socket.on('my other event', function (data) {
            console.log(data);
        });
    });
};