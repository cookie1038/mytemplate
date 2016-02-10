/*设置主题时替换样式*/
function replaceClass(color, c) {
    $('.' + c + 'color').each(function() {
        var newCls = '';
        var cls =  $(this).attr('class').split(' ');
        /*遍历去掉老的颜色值*/
        for (var i = 0; i < cls.length; i++) {
            var cl = cls[i];
            if ((cl.indexOf(c) < 0) || ((c + 'color') == cl)) {
                newCls = (i == cls.length - 1) ? newCls + cl : newCls + cl + ' ' ;
            }
        }
        console.log('颜色样式：' + c + ',新样式：' + newCls);
        $(this).attr('class', newCls);
        $(this).addClass(c + color);
    });
}

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

    /*调色面板显示开关*/
    $('#theme-change .theme-change-handle').click(function() {
        var l = $('#theme-change').attr('left');
        if (l == -200) {
            $('#theme-change').attr('left', 0).animate({
                'left': '0'
            });
        } else {
            $('#theme-change').attr('left', -200).animate({
                'left': '-200px'
            });
        }
    });
    /*调色面板某颜色选中样式设置*/
    $('#theme-change .theme-change-container ul li').click(function() {
        $(this).addClass('selected').siblings().removeClass('selected');
        var color = $(this).attr('data-colors');
        replaceClass(color, 'bf-');
        replaceClass(color, 'bf-text-');
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

    /*监听滚动条位置*/
    $(window).scroll(function(event){
        var t = $(window).scrollTop();
        var nav = $('#headNav');
        if (t < 5) {
            nav.addClass('none-shadow');
        } else {
            nav.removeClass('none-shadow');
        }
    });
});
