$(function () {

    $('#concert_list').slick({
        centerMode: true,
        slide: "div",
        infinity: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 2000,
        arrows: true,
        pause: true,
        pauseOnHover: true,
        dots: false
    });

    // menu 슬라이드
    $('.subbox').hide();
    $('.sub').hide();

    $('.nav2>li').mouseenter(function () {
        $('.sub').stop().slideDown(500);
        $('.subbox').stop().slideDown(500);
    });

    $('.menu').mouseleave(function () {
        $('.sub').stop().slideUp(500);
        $('.subbox').stop().slideUp(500);
    });

    // search_box 슬라이드
    $('.search_box').hide();
    $('.search').click(function () {
        $('.search_box').slideToggle("50", function () {});
    });

    //top아이콘 클릭시 부드럽게 이동
    $(".top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow")
        return false
    });

    /* schedule_box tab */
    $('.t1 a, .t2 a, .t3 a').bind('focus click', function (e) {
        e.preventDefault();
        $('#item1, #item2, #item3').hide();
        $(this).parent().next().show()
        $('.content h2').click(function () {
            $(this).addClass('tab_on');
        });
        $('.content h2').removeClass('tab_on');
    });

    // quick
    const top = parseInt($("#quick").css("top"));
    $(window).on("scroll", function () {

        const dis = $(window).scrollTop();
        $("#quick").stop().animate({
            top: dis + top + "px"
        }, 1000);
    });

    //top아이콘 클릭시 부드럽게 이동
    $(".top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow")
        return false
    });

});