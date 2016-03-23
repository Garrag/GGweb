/**
 * Created by Dall on 15/7/21.
 */
var utils = {
    addBackgroud:function(img, target) {
        if(img){
            var size = cc.director.getWinSize();
            var sp = cc.Sprite.create(img);
            sp.x = size.width/2;
            sp.y = size.height/2;
            sp.setScaleX(size.width/640);
            sp.setScaleY(size.height/1136);
            if(target){
                target.addChild(sp,-1);
            }
        }
    },

    getDelayAction:function(act, time){
        var seq = cc.sequence(cc.delayTime(time), act);
        return seq;
    },

    getAnimation:function(name ,num, time){
        var animation = new cc.Animation();
        for (var i = 1; i <= num; i++) {
            if(!name){
                name = "";
            }
            var frameName = name + i + ".png";
            var spriteFrame = cc.spriteFrameCache.getSpriteFrame(frameName);
            animation.addSpriteFrame(spriteFrame);
        }
        animation.setDelayPerUnit(time);           //设置两个帧播放时间
        animation.setRestoreOriginalFrame(true);    //动画执行后还原初始状态
       return cc.animate(animation);
    },

    addListener:function(name, fun){
        var listen = cc.EventListener.create({
            event:cc.EventListener.CUSTOM,
            eventName:name,
            callback:fun
        });
        cc.eventManager.addListener(listen, 2);
    },

    sendEvent:function(name ,data){
        var event = new cc.EventCustom("music");
        if(data){
            event.setUserData(data);
        }
        cc.eventManager.dispatchEvent(event);
    }

};