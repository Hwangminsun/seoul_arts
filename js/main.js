$(function () {

    //main 슬릭
    $('.container').slick({
        autoplay: true,
        infinite: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        arrows: true,
        fade: true,
        cssEase: 'linear',
        asNavFor: '.main_sub'
    });

    $('.main_sub').slick({
        autoplay: true,
        infinite: true,
        autoplaySpeed: 4000,
        slidesToShow: 5,
        arrows: false,
        startMode: true,
        focusOnSelect: true,
        centerPadding: '0',
        cssEase: 'linear',
        asNavFor: '.container'
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

    //concert_list 시작
    $(".concert_left").slick({
        autoplay: true,
        infinite: true,
        autoplaySpeed: 3000,
        arrows: false,
        asNavFor: '.concert_right'
    });

    $(".concert_right").slick({
        autoplay: true,
        infinite: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        arrows: true,
        focusOnSelect: true,
        asNavFor: '.concert_left'
    });

    $('.concert_right .slick-current').prev().css('display', 'none');

    /* // contcert_list filter
    $(".tab_box li").on("click", function(e) {
        const n=$(this).index();
        $(".tab_box li").removeClass("tab_on")
        $(this).addClass("tab_on");
        
        if(n==0){
            $(".concert_right").slick("slickUnfilter");
        }else if(n==1){
            $(".concert_right").slick("slickUnfilter"); //필터 해제후
            $(".concert_right").slick("slickFilter",$(".concert_right div").filter(".aaa")); //,$(필터적용대상).filter("맞춰둔 클래스이름")
        }else if(n==2){
            $(".concert_right").slick("slickUnfilter");
            $(".concert_right").slick("slickFilter",$(".concert_right div").filter(".bbb"));
        }else{
            $(".concert_right").slick("slickUnfilter");
            $(".concert_right").slick("slickFilter",$(".concert_right div").filter(".ccc"));
        }
        e.preventDefault();
    });

    $(".tab_box li").on("click", function (e) {
        const n=$(this).index();
        $(".tab_box li").removeClass("tab_on")
        $(this).addClass("tab_on");
        if(n==0){
            $(".concert_left").slick("slickUnfilter");
        }else if(n==1){
            $(".concert_left").slick("slickUnfilter"); //필터 해제후
            $(".concert_left").slick("slickFilter",$(".concert_left div").filter(".aaa")); //,$(필터적용대상).filter("맞춰둔 클래스이름")
        }else if(n==2){
            $(".concert_left").slick("slickUnfilter");
            $(".concert_left").slick("slickFilter",$(".concert_left div").filter(".bbb"));
        }else{
            $(".concert_left").slick("slickUnfilter");
            $(".concert_left").slick("slickFilter",$(".concert_left div").filter(".ccc"));
        }
        //slickUnfilter,적용된 .filter를 해제
        e.preventDefault();
    }); */

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

    /* rolling -글자 slide */

    let roller = document.querySelector('.rolling-left');
    roller.id = 'roller1';

    let clone = roller.cloneNode(true)
    clone.id = 'roller2';
    document.querySelector('.wrap-left').appendChild(clone);

    document.querySelector('#roller1').style.left = '0';
    document.querySelector('#roller2').style.left = document.querySelector('.rolling-left ul li').offsetWidth + 'px';

    roller.classList.add('original');
    clone.classList.add('clone');

    // down
    let roller2 = document.querySelector('.rolling-down');
    roller2.id = 'roller5';

    let clone2 = roller2.cloneNode(true)
    clone2.id = 'roller6';
    document.querySelector('.wrap-down').appendChild(clone2);

    document.querySelector('#roller5').style.top = '0';
    document.querySelector('#roller6').style.top = document.querySelector('.rolling-down ul').offsetHeight + 'px';

    roller2.classList.add('original-2');
    clone2.classList.add('clone-2');

    // up
    let roller1 = document.querySelector('.rolling-up');
    roller1.id = 'roller3';

    let clone1 = roller1.cloneNode(true);
    clone1.id = 'roller4';
    document.querySelector('.wrap-up').appendChild(clone1);

    document.querySelector('#roller3').style.top = '0';
    document.querySelector('#roller4').style.top = document.querySelector('.rolling-up ul').offsetHeight + 'px';

    roller1.classList.add('original-1');
    clone1.classList.add('clone-1');

    //공지사항 탭 수정후
    $('.t1 p a, .t2 p a').bind('focus click', function (e) {
        e.preventDefault();
        $('#item1, #item2').hide();
        $(this).parent().parent().next().show()
        $('.contentbox h2 p a').click(function () {
            $(this).addClass('on');
        });
        $('.contentbox h2 p a').removeClass('on');
    });

    //top아이콘 클릭시 부드럽게 이동
    $(".top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow")
        return false
    });


})