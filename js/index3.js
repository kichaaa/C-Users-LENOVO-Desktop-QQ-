/***
 * 创建一个构造函数 Slide
 *  轮播自动切换:autoMove()
 */
function Slide(box){//box 轮播容器
    this.index=0;
    this.isPlay=true;
    this.box = $(box);//获取轮播的父级容器
    this.imgBox =this.box.find("ul").eq(0);//获取轮播图片容器
    console.log(this.imgBox);
    this.pageBox = this.box.find("ul").eq(1);//获取轮播文字按钮容器
    this.pageLi=this.pageBox.find("li");//获取文字按钮区域的li
    this.len = this.pageLi.length;//获取图片数量
    this.init();//该方法会在对象实例化时自动执行
}
Slide.prototype={
    autoMove:function(){
        var _this = this;
        if(this.isPlay){
            _this.move();
            _this.index++;
            _this.index%=_this.len;
        }
        setTimeout(function(){//闭包
            _this.autoMove();
        },1000)
    },
    move:function(){
    this.imgBox.animate({left:-(this.index * 666)},500);
    this.pageLi.eq(this.index).addClass("active").siblings().removeClass("active");
},
    hoverEvent:function(){
    var _this = this;
    this.box.hover(function(){
        _this.isPlay =false;
    },function(){
        _this.isPlay =true;
    })
},
    liEvent:function(){
    var _this = this;
    _this.pageLi.mouseover(function(){
        _this.index = $(this).index();
        _this.move();
    })
},
    init : function(){
    this.autoMove();//执行自动轮播切换
    this.hoverEvent();//执行绑定鼠标悬停事件
    this.liEvent();//执行鼠标悬停到文字显示对应的图片
}
}
//对象实例化
$(".slide").each(function(index,item){
    //console.log(item);
    new Slide(item);
})
