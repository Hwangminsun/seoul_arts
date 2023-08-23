## 팀 프로젝트 - 예술의 전당 (Seoul Arts Center)
### URL : https://sonhanbin.github.io/seoul_arts_center
### 기여도 : 20%
----------------------
### 기획 의도
>   예술의전당은 연간 300만의 방문객이 찾는 명실상부  
> 우리나라 문화예술의 중심이며 세계적으로 자부심이 되는  
> 예술종합문화공간을 제공하기 위해 끊임없이 노력하는 공연 전시 공간이다.
> 
> 현재 예술의전당 홈페이지는 가독성이 떨어지고 다양한 연령층의 사용자를  
> 확보하지 못하여 홈페이지 접근성 면에 영향을 미치고 있다.  
> 홈페이지 리뉴얼을 통해 예술의 전당의 핵심가치인  
> 안정적 문화예술 플랫폼 지향의 가치의 요소를 부각시키고  
> 다양한 연령층에 대한 접근성과 국민의 문화향유의 기회 확대 미션을 이루고자 한다.  
### Skill : HTML, CSS, Javascript, Jquery  
> - 웹 접근성 : skip-menu (메뉴 바로가기, 내용 바로가기)   
> - W3C 유효성 검사 완료
> - HTML5 시맨틱 태그
> - 크로스브라우징 (크롬, 엣지, 파이어폭스, 오페라)
### 참여한 부분
-----------------------
  >  - Fullmenu slide
> ```
>    $('.subbox').hide();
>    $('.sub').hide();
>
>    $('.nav2>li').mouseenter(function () {
>        $('.sub').stop().slideDown(500);
>        $('.subbox').stop().slideDown(500);
>    });
>
>    $('.menu').mouseleave(function () {
>        $('.sub').stop().slideUp(500);
>        $('.subbox').stop().slideUp(500);
>    });
> ```
  >  - 검색버튼 toggle slide
  >  - slick slider 2개 연동
>
> ![arts_cap](https://github.com/Hwangminsun/seoul_arts/assets/127732251/3b2ec0d4-3d54-4d54-bf74-1996f60d4e66)  
> ```
>    $('.container').slick({
>       autoplay: true,
>        infinite: true,
>        autoplaySpeed: 4000,
>        slidesToShow: 1,
>        arrows: true,
>        fade: true,
>        cssEase: 'linear',
>        asNavFor: '.main_sub'
>    });
>
>    $('.main_sub').slick({
>        autoplay: true,
>        infinite: true,
>        autoplaySpeed: 4000,
>        slidesToShow: 5,
>        arrows: false,
>        startMode: true,
>        focusOnSelect: true,
>        centerPadding: '0',
>        cssEase: 'linear',
>        asNavFor: '.container'
>    });
> ```
  >  - 부드럽게 이동하는 퀵메뉴
  >  - 오른쪽 slick slide(썸네일역할) 세로 50% 보이도록 css 설정, slick 연동 후 왼쪽으로 이어지듯이 보이는 효과
>      
> ![arts_cap_3](https://github.com/Hwangminsun/seoul_arts/assets/127732251/a077e1f1-0026-4bac-a38e-c72e0bdced16) 
>```
>// 오른쪽 slick - 이미지 width 400px 설정하고 왼쪽으로 이동, 이미지 가운데 일부 보이게
>
>.concert_right {
>    position: relative;
>    width: 100%;
>}
>
>.concert_right>div {
>    position: absolute;
>    width: 90%;
>    left: 50%;
>    top: 50%;
>    transform: translate(-50%, -50%) !important;
>}
>
>.concert_right div a img {
>    width: 400px;
>    transform: translateX(-32.5%);
>}
>
>.concert_right div a::after {
>    content: "";
>    display: block;
>    position: absolute;
>    top: 0;
>    left: 0;
>    width: 100%;
>    height: 100%;
>    background: rgba(0, 0, 0, 0.5);
>}
>
>.concert_right div a {
>    position: relative;
>    display: block;
>    overflow: hidden;
>    width: 80%;
>    height: 100%;
>    margin: 0 auto;
>}
>```
  >  - left, up, down 무한 슬라이드 애니메이션
>
> ![arts_cap_4](https://github.com/Hwangminsun/seoul_arts/assets/127732251/992fb3b0-235c-4942-adf3-37f658d6fee7)
