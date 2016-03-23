/**
 * Created by Dall on 15/7/20.
 */
var MainScene = cc.Scene.extend({

    onEnter:function () {
        this._super();
        var layer = ccs.load("img/MainScene.json").node;
        this.addChild(layer, 5);

        var bg = ccui.helper.seekWidgetByName(layer, "bg");
        bg.setScaleX(cc.winSize.width/640);
        bg.setScaleY(cc.winSize.height/1136);
        this.x += (cc.winSize.width-640)/2;

        this.setScale(cc.winSize.width/640);

        var start = ccui.helper.seekWidgetByName(layer, "start");
        //var again = ccui.helper.seekWidgetByName(layer, "again");
        //again.setVisible(false);
        var but = ccui.helper.seekWidgetByName(layer, "button");
        var rs = ccui.helper.seekWidgetByName(layer, "jieguo");

        var start_time = 0;
        var end_time = 0;
        var anNum = 2;
        but.addTouchEventListener(function(sender, type){
            if(type == 2){
                if(anNum == 2){
                    start_time = new Date().getTime();
                    anNum--;
                    return;
                }else if(anNum == 1) {
                    end_time = new Date().getTime();
                    anNum--;
                    cc.log("两次点击的时间 = " + (end_time - start_time));
                    rs.setString("" + (end_time - start_time));
                    start_time = 0;
                    end_time = 0;
                }
                if(anNum == 0){
                    anNum = 2;
                }

            }
        }, but);
    }

});
