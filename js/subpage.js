$(function () {

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

    // 하트
    $(".heart img").on('click', function () {
        const src = ($(this).attr("src") == "img/heart.png") ? "img/heart_full.png" : "img/heart.png";
        $(this).attr("src", src)

    });

    /* 클릭 할때마다 본문 부드럽게 이동 */
    const poster = $(".poster > li")
    const circle = $(".circle li")
    circle.on('click', function (event) {
        event.preventDefault();

        const tg = $(this);
        const i = tg.index();

        const poster_li = poster.eq(i);
        const circle_li = poster_li.offset().top - 80;

        $("html, body").stop().animate({
            scrollTop: circle_li
        }, "slow");

        $(".circle li").removeClass("circle_on")
        $(this).addClass("circle_on")
    });

    /* 스크롤 할때마다 */
    $(window).scroll(function () {
        const sct = $(window).scrollTop();
        poster.each(function () {
            const tg1 = $(this);
            const i = tg1.index();
            if (tg1.position().top - 80 <= sct) {
                circle.removeClass("circle_on");
                circle.eq(i).addClass("circle_on");
            }

        })
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