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

})