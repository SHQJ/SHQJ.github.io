// transition
// 单色背景变化
$(function () {
    $(".cc3").click(function () {
        var xh = $(this).index('.cc3');
        $(".aa").eq(0).css("background", $('.bb2').eq(xh).text());
        $(".aa").eq(0).css("transition", "background 1s");
    })
})
// 固定导航栏
$(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
        $('#ask0').css("position", "fixed");
        $('#ask0').css("z - index", "2");
    } else {
        $('#ask0').css("position", "static");
        $('#ask0').css("z - index", "2");
    }
})