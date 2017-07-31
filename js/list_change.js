/**
 * Created by Administrator on 2017/7/31 0031.
 */
$(".drchoose_ul li").on("click",function () {
    $(this).toggleClass("choose_hover");
    $(this).siblings().removeClass("choose_hover");
});
$(".thesec_word-left i").on("click",function () {
    $(this).toggleClass("onChoose");
    $(this).siblings().removeClass("onChoose");
});
// $(".")