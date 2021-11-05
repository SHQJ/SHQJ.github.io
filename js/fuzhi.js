$(function () {
    $('body').css("background", "#212529")
    // 移入、移出，显示、隐藏  “点击复制”“复制成功”事件。
    $('.aa1').hover(function () {
        var xh = $(this).index('.aa1');
        $('.cc3').hide(50)
        $('.dd4').hide(50)
        $('.cc3').eq(xh).show(75)
    }, function () {
        $('.cc3').hide(50)
    })

    $('.cc3').click(function () {
        var xh = $(this).index('.cc3');
        //    点击后发生显示“复制成功”  、 隐藏“点击复制”事件。
        $('.cc3').hide(50)
        $('.dd4').eq(xh).show(75)

        // 获取当前div的颜色编号。
        var xcolor = $('.bb2').eq(xh).text();

        // 将获取到的颜色编号放到一个原本隐藏的文本框中。
        $('#colortext').text(xcolor);

        // 选中颜色标号。select()只能选中显示出来的内容，这里使用show()来配合
        $('#colortext').show().select();

        // 使用js中的execCommand()方法及指令'copy'将当前选中区复制到剪贴板。
        document.execCommand('copy', false, null);

        // 防止文本框的内容堆积，每次将内容复制到剪贴板后，清空文本框内容。
        $('#colortext').text("");

        // 将文本重新隐藏
        $('#colortext').hide();
    })
})