$(function () {
    $('.skx0red').addClass('active');
    $('#sk0>.skx0').click(function () {
        // $(this).addClass('active').siblings('li').removeClass('active');
        $(".skx0").removeClass('active');
        $(this).addClass('active');

        var idx = $(this).index();
        // $('.products>.main').eq(idx).addClass('selected').siblings('div').removeClass('selected');
        $(".skcolor").hide();
        $(".skcolor").eq(idx).show();
    });

});
// 以上是色块的选项卡