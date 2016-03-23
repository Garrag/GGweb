/**
 * Created by admin on 2015/8/1.
 */
$.ajax({
    url: 'http://m.lehoo.me/wx/rsx/1'
    ,type: 'post'
    ,data: {
        url: location.href.split('#')[0]
    }
}).done(function(r){
    wx.config({
        debug: false,
        appId: r.appid,
        timestamp: r.timestamp,
        nonceStr: r.nonceStr,
        signature: r.signature,
        jsApiList: [
            'checkJsApi',
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'hideMenuItems',
            'chooseImage',
            'onMenuShareQZone'
        ]
    });
    // 微信api调用
    wx.ready(function() {
        var data = {
            title: 'GGame-游戏小基地，让你的生活充满乐趣', // 分享标题
            desc:  'H5小游戏,让你的生活充满乐趣', // 分享描述
            link: 'http://sqvdj.cn', // 分享链接
            imgUrl:'http://sqvdj.cn/assets/i/app-icon72x72@2x.png', // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        };
        wx.onMenuShareAppMessage(data);
        wx.onMenuShareTimeline(data);
        wx.onMenuShareQQ(data);
        wx.onMenuShareQZone(data);
        wx.onMenuShareWeibo(data);
    });
});