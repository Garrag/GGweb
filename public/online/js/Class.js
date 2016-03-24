/**
 * Created by admin on 2015/10/17.
 */
(function(){
    var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;
    this.Class = function(){};//定义class(全局变量)
    Class.extend = function(prop) {
        var _super = this.prototype; //转移本身的原型
        initializing = true;
        var prototype = new this(); //用自身构造器创建一个对象,作为新的原型
        initializing = false;
        for (var name in prop) {
            prototype[name] = typeof prop[name] == "function" && typeof _super[name] == "function" && fnTest.test(prop[name]) ?
                (function(name, fn){
                    return function() {
                        var tmp = this._super;
                        this._super = _super[name];
                        var ret = fn.apply(this, arguments);
                        this._super = tmp;
                        return ret;
                    };
                })(name, prop[name]) : prop[name];
        }
        function Class() {  //创建一个临时的构造器
            if ( !initializing && this.init )
                this.init.apply(this, arguments);
        }
        Class.prototype = prototype;
        Class.constructor = Class;
        Class.extend = arguments.callee; //子类也具有改extend方法
        return Class;//新的进过加工的构造器
    };
})();
