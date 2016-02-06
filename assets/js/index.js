$(function() {
    /*菜单切换*/
    $('.button-collapse').sideNav();

    /*显示和隐藏搜索*/
    $('#searchIcon').click(function() {
        $('#search-mask').fadeIn(300);
        $('#searchKey').focus();
        $('#searchIcon').hide();
    });
    $('#search-mask .search-close').click(function() {
        $('#searchIcon').show();
        $('#search-mask').fadeOut(300);
    });

    /*回到顶部*/
    $('.scrollSpy').scrollSpy();
    /*回到顶部按钮根据滚动条的位置的显示和隐藏*/
    $(window).scroll(function(event){
        var t = $(window).scrollTop();
        var ts = $('.top-scroll');
        if (t < 50) {
            ts.hide();
        } else {
            ts.show();
        }
    });
});
