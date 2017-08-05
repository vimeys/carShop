$(".comeback").on("click",function () {
    console.log($(".cmain").offset().top);
    $("html body").animate( {
            scrollTop:$(".cmain").offset().top
        }
    )
})