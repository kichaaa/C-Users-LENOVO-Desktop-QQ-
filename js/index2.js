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

    //通过原型添加各种执行功能：自动轮播功能
    Slide.prototype.autoMove=function(){
        var _this = this;
        if(this.isPlay){
            _this.move();
            _this.index++;
            _this.index%=_this.len;
        }
        setTimeout(function(){//闭包
            _this.autoMove();
        },1000)
    }
    //轮播图切换功（图片切换，文字样式切换）
    Slide.prototype.move=function(){
        this.imgBox.animate({left:-(this.index * 666)},500);
        this.pageLi.eq(this.index).addClass("active").siblings().removeClass("active");
    }
    //定义轮播图悬停停止功能
    Slide.prototype.hoverEvent=function(){
        var _this = this;
        this.box.hover(function(){
            _this.isPlay =false;
        },function(){
            _this.isPlay =true;
        })
    }
    //鼠标悬停切换到指定显示
    Slide.prototype.liEvent=function(){
        var _this = this;
        _this.pageLi.mouseover(function(){
            _this.index = $(this).index();
            _this.move();
        })
    }

    //定义一个初始化函数
    Slide.prototype.init = function(){
        this.autoMove();//执行自动轮播切换
        this.hoverEvent();//执行绑定鼠标悬停事件
        this.liEvent();//执行鼠标悬停到文字显示对应的图片
    }


    //对象实例化
//var s1 = new Slide("#slide1");
//var s2 = new Slide("#slide2");
//var s3 = new Slide("#slide3");
//var s4 = new Slide("#slide4");
//var s5 = new Slide("#slide5");
//var s6 = new Slide("#slide6");
//var s7 = new Slide("#slide7");
//var s8 = new Slide("#slide8");
//var s9 = new Slide("#slide9");

    $(".slide").each(function(index,item){
        //console.log(item);
        new Slide(item);
    })
