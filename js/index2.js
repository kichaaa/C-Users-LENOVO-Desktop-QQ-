/***
 * ����һ�����캯�� Slide
 *  �ֲ��Զ��л�:autoMove()
 */

    function Slide(box){//box �ֲ�����
        this.index=0;
        this.isPlay=true;
        this.box = $(box);//��ȡ�ֲ��ĸ�������
        this.imgBox =this.box.find("ul").eq(0);//��ȡ�ֲ�ͼƬ����
        console.log(this.imgBox);
        this.pageBox = this.box.find("ul").eq(1);//��ȡ�ֲ����ְ�ť����
        this.pageLi=this.pageBox.find("li");//��ȡ���ְ�ť�����li
        this.len = this.pageLi.length;//��ȡͼƬ����
        this.init();//�÷������ڶ���ʵ����ʱ�Զ�ִ��
    }

    //ͨ��ԭ����Ӹ���ִ�й��ܣ��Զ��ֲ�����
    Slide.prototype.autoMove=function(){
        var _this = this;
        if(this.isPlay){
            _this.move();
            _this.index++;
            _this.index%=_this.len;
        }
        setTimeout(function(){//�հ�
            _this.autoMove();
        },1000)
    }
    //�ֲ�ͼ�л�����ͼƬ�л���������ʽ�л���
    Slide.prototype.move=function(){
        this.imgBox.animate({left:-(this.index * 666)},500);
        this.pageLi.eq(this.index).addClass("active").siblings().removeClass("active");
    }
    //�����ֲ�ͼ��ֹͣͣ����
    Slide.prototype.hoverEvent=function(){
        var _this = this;
        this.box.hover(function(){
            _this.isPlay =false;
        },function(){
            _this.isPlay =true;
        })
    }
    //�����ͣ�л���ָ����ʾ
    Slide.prototype.liEvent=function(){
        var _this = this;
        _this.pageLi.mouseover(function(){
            _this.index = $(this).index();
            _this.move();
        })
    }

    //����һ����ʼ������
    Slide.prototype.init = function(){
        this.autoMove();//ִ���Զ��ֲ��л�
        this.hoverEvent();//ִ�а������ͣ�¼�
        this.liEvent();//ִ�������ͣ��������ʾ��Ӧ��ͼƬ
    }


    //����ʵ����
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
