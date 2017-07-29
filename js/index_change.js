/**
 * Created by Administrator on 2017/7/27 0027.
 */

// 点击商品列表切换列表类型
$(".thing-nav li").on("click",function(){
    if($(this).siblings().hasClass("on")){
        $(".thing-nav li.on").removeClass("on").addClass("main_list");
    }
    $(this).removeClass("main_list").addClass("on");
    var data=$(this).attr("data-class");
    console.log(data);
    $.ajax({
        url:"",
        type:"POST",
        data:data,
        dataType:"json",
        success:function () {

        }
    })

});
$(".side_toggle").on("click",function () {
    if($(".side").attr("data-class")==1){
        $(".side").animate({right:"-100px"},1200);
        $(".side").attr("data-class",2);
        $(".side_toggle span").css({transform: "rotate(180deg)"})
    }
});
$(".side_toggle").mouseover(function () {
    if($(".side").attr("data-class")==2){
        $(".side").animate({right:"0"},1200);
        $(".side").attr("data-class",1);
        $(".side_toggle span").css({transform: "rotate(0deg)"})
    }
});
$(".side li").hover(function () {
    console.log(1);
        $(this).find("p").css({display:"inline-block"})
        $(this).find("div").css({display:"inline-block"})
},function () {
    $(this).find("p").css({display:"none"})
    $(this).find("div").css({display:"none"})
})
$(".side_hm").hover(function () {
        $(this).find("ul").css({display:"block"})
    },
    function () {
        $(this).find("ul").css({display:"none"})
    }
)
$(".tl-btn").hover(function () {
    $(this).html("");
},function () {
    $(this).html("加入购物车")
})
