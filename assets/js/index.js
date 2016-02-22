/*调色面板的开关方法*/
function openOrClosePanel() {
    var l = $('#theme-change').attr('left');
    if (l == -200) {
        $('#theme-change').attr('left', 0).animate({'left': '0'});
    } else {
        $('#theme-change').attr('left', -200).animate({'left': '-200px'});
    }
}

/*设置主题时替换样式方法*/
function replaceClass(color, c) {
    $('.' + c + 'color').each(function() {
        var newCls = '';
        var cls =  $(this).attr('class').split(' ');
        /*遍历去掉老的颜色值*/
        for (var i = 0; i < cls.length; i++) {
            var cl = cls[i];
            if ((cl.indexOf(c) < 0) || ((c + 'color') == cl)) {
                newCls = (i == cls.length - 1) ? newCls + cl : newCls + cl + ' ';
            }
        }
        newCls = $.trim(newCls);
        $(this).attr('class', newCls);
        $(this).addClass(c + color);
    });
}

function changeTheme(t) {
    var color = t.attr('data-colors');
    replaceClass(color, 'bf-');
    replaceClass(color, 'bf-text-');
    setLocalTheme(color);
}

/*设置本地颜色到localStorage中*/
function setLocalTheme(color) {
    if (color) {
        window.localStorage.setItem('bfTheme', color);
    }
}

/*初始化主题颜色*/
function initTheme() {
    var color = window.localStorage.getItem('bfTheme');
    if (color) {
        replaceClass(color, 'bf-');
        replaceClass(color, 'bf-text-');
    }
}

/*设置所有文章div的宽度*/
function setArtWidth() {
    var w = $('#navContainer').width();
    if (w >= 450) {
        w = w + 21;
    } else if (w >= 350 && w < 450) {
        w = w + 18;
    } else if (w >= 300 && w < 350) {
        w = w + 16;
    } else {
        w = w + 14;
    }
    $('#articles').width(w);
}

/*文章内容详情的一些初始化特性*/
function articleInit() {
    $('#articleContent img').addClass('materialboxed').addClass('responsive-img');
    $('#articleContent a').attr('target', '_blank').addClass('bf-text-color');
    $('.materialboxed').materialbox();
}

$(function() {
    /*菜单切换*/
    $('.button-collapse').sideNav();

    /*初始化主题*/
    initTheme();

    /*silider初始化*/
    $('.slider').slider({
        height: 230,
        interval: 4000
    });

    setArtWidth();
    /*调整屏幕宽度时重新设置文章列的宽度，修复小间距问题*/
    $(window).resize(function() {
        setArtWidth();
    });

    /*初始化瀑布流布局*/
    $('#articles').masonry({
        itemSelector: '.article'
    });

    /*初始化文章内容的一些显示特性*/
    articleInit();

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
        openOrClosePanel();
    });
    /*移动端主题设置的显示开关*/
    $('#themeHandle').click(function() {
        $('#themeModal').openModal();
        $('.button-collapse').sideNav('hide');
    });
    /*桌面端调色面板某颜色选中样式时的主题颜色设置*/
    $('#theme-change .theme-change-container ul li').click(function() {
        $(this).addClass('selected').siblings().removeClass('selected');
        changeTheme($(this));
        openOrClosePanel();
    });
    /*移动端调色面板某颜色选中样式时的主题颜色设置*/
    $('#themeModal .theme-settings div').click(function() {
        changeTheme($(this));
        $('#themeModal').closeModal();
    });

    /*回到顶部*/
    $('#backTop').click(function() {
        $('body,html').animate({scrollTop: 0}, 400);
        return false;
    });

    /*监听滚动条位置*/
    $(window).scroll(function(event) {
        var t = $(window).scrollTop();
        /*导航栏位置监听*/
        var nav = $('#headNav');
        if (t < 15) {
            nav.addClass('none-shadow');
        } else {
            nav.removeClass('none-shadow');
        }

        /*回到顶部按钮根据滚动条的位置的显示和隐藏*/
        var ts = $('.top-scroll');
        if (t < 100) {
            ts.slideUp(300);
        } else {
            ts.slideDown(300);
        }
    });
});
