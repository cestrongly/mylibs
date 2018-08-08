$(() => {

    /* ========================================================================= */
    /*	Page Preloader
    /* ========================================================================= */

    window.onload = () => {
        document.getElementById('loading-mask').style.display = 'none';
    }


    /* ========================================================================= */
    /*	myCarousel init
    /* ========================================================================= */

    $('#myCarousel').carousel({
        //设置自动播放/3 秒
        interval: 5000,
    });

    /* ========================================================================= */
    /*	myCarousel 图片延迟加载
    /* ========================================================================= */

    function lazyContainer(searchNode) {
        $(searchNode).find('.active').find('img.lazy').each(function() {
            var imgSrc = $(this).attr('data-src');
            if (imgSrc) {
                $(this).attr('src', imgSrc);
                $(this).attr('data-src', '');
            }
        });
    }

    $('#myCarousel').bind('slid.bs.carousel', function() {
        lazyContainer(this);
    });

    lazyContainer('#myCarousel');

});