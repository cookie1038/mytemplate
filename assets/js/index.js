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
});
