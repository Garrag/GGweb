/**
 * Created by Dall on 2016/3/24.
 */
var game = {
    socket: null,
    renderer: null,
    init: function (canvas) {
        var socket = this.socket = new NetManager('http://localhost:8000'); //网络管理员
        var renderer = this.renderer = new Renderer(canvas);//渲染员(负责渲染界面)
        //初始化画布
        var context = canvas.getContext('2d');
        canvas.width = document.body.clientWidth - 2;
        canvas.height = document.body.clientHeight - 4;
        var touch = utils.captureTouch(canvas); //获取手指接触对象
        var mouse = utils.captureMouse(canvas); //获取手指接触对象
        //用户事件
        //canvas.addEventListener('touchmove', socket.touchEvent(touch).bind(socket));
        canvas.addEventListener('mousemove', socket.touchEvent(mouse).bind(socket));
    }
};

//网络管
var NetManager = Class.extend({
    socket: null,
    init: function (port) {
        var self = this.socket = io(port);
        this.socket.on('connect', function () {
            self.emit('login', {'name': 'Dall'});
        });
        //监听事件
        this.socket.on('event', function (data) {
        });
        this.socket.on('disconnect', function () {
        });
        //接收到服务器数据
        this.socket.on('move', function (data) {
            console.log('move : ' + data.x + ":" + data.y);
        });
    },
    //处理用户事件
    touchEvent: function (touch) {
        return function () {
            this.socket.emit('move', touch);
        }
    },
    on: function (event, cb) {
        this.on(event, cb);
    },
    emit: function (event, data) {
        this.socket.emit(event, data);
    }
});

//渲染员
var Renderer = Class.extend({
    context: null,
    handles:[],
    init: function (canvas) {
        var context = this.context = canvas.getContext("2d");
        var handles = this.handles;
        (function drawFrame() {
            window.requestAnimationFrame(drawFrame, canvas);
            context.clearRect(0, 0, canvas.width, canvas.height); //清空画布
            for(var k in handles){
                handles[k].render();
            }
        })();
    }
});

/**
 * 球类
 */
var ball = Class.extend({
    x:0,
    y:0,
    render:function(context){
        //context.drawCrle
    }
});

