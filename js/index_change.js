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
