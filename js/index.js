$(function(){
    var index = 0;
    var isPlay = true;
    var len = $(".slide-img li").length;

    function slide(){
        if(isPlay) {
            $(".slide-img").stop().animate({left: -(index * 666)}, 500);
            $(".slide-text li").eq(index).addClass("active").siblings().removeClass("active");
            index++;
            index %= len;
        }
        setTimeout(slide,1000);
    }

    slide();

    $("#slide").hover(function(){
        isPlay = false;
    },function(){
        isPlay = true;
    })

    $(".slide-text li").on("mouseover",function(){
        index = $(this).index();
        $(".slide-img").stop().animate({left:-(index*666)},500);
        $(".slide-text li").eq(index).addClass("active").siblings().removeClass("active");
    })
})