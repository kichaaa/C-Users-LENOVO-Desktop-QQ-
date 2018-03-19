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
Slide.prototype={
    autoMove:function(){
        var _this = this;
        if(this.isPlay){
            _this.move();
            _this.index++;
            _this.index%=_this.len;
        }
        setTimeout(function(){//�հ�
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
    this.autoMove();//ִ���Զ��ֲ��л�
    this.hoverEvent();//ִ�а������ͣ�¼�
    this.liEvent();//ִ�������ͣ��������ʾ��Ӧ��ͼƬ
}
}
//����ʵ����
$(".slide").each(function(index,item){
    //console.log(item);
    new Slide(item);
})
