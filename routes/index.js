var express = require('express');
var router = express.Router();
//加载sql对象
var sql = require('./dao/mysql');

router.get('/', function(req, res, next) {
    //判断是否是设备是PC还是移动设备
    var deviceAgent = req.headers['user-agent'].toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
    if (agentID) { //移动设备
        //获取数据
        var sqlStr = 'select * from game';
        sql.query(sqlStr, function(err,rs){
            //如果有错误,打印出来
            if(err)console.log(err);
            else {
                res.render('index',{games:rs});//{ id: 1, name: '1', uri: '1', count: 1, imageUri: '1', intro: '1' }
            }
        });
    } else { //PC
        res.render('hint',{});
    }
});

module.exports = router;
