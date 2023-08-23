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
> - 웹 접근성 : skip-menu (내용 바로가기, 하단 바로가기)   
> - W3C 유효성 검사 완료
> - HTML5 시맨틱 태그
> - 크로스브라우징 (크롬, 엣지, 파이어폭스, 오페라)
### 주요 구현기능
-----------------------
 1. Main page
  
> ![taper_cap_size_down](https://github.com/Hwangminsun/tapered_coffee/assets/127732251/8965dd51-88a1-4f38-b5f0-b2463dd857e3)  
  >  - 풀메뉴 슬라이드
  >  - 검색버튼 토글 슬라이드
  >  - 슬릭 슬라이더 2개 연동
> ```
>function slideMenu() {
> 
>        const activeState = $(".menu").hasClass("active");
>  
>        $(".menu").animate({
>            left: activeState ? "0%" : "-400px"}, 300);
>        }
>        
>        $(".hamburger").on("click",function(){
> 
>            $(".hamburger").toggleClass("open");
>            $(" .menu").toggleClass("active");
> 
>            slideMenu();
>  
>        });
> ```
  >  - 부드럽게 이동하는 퀵메뉴
  >  - 오른쪽 슬릭 슬라이드(썸네일역할) 세로 50% 보이도록 css 설정, 슬릭 슬라이더 연동 후 왼쪽 슬릭으로 이어지듯이 보이는 효과
      
>    ![taper_cap_size_down](https://github.com/Hwangminsun/tapered_coffee/assets/127732251/8965dd51-88a1-4f38-b5f0-b2463dd857e3) 
>```
>$('#right li a.r_service').click(function(){
>
>  // 요소의 스크롤 높이 절대값
>  const div = document.getElementById('contact');
>  const divTop = div.getBoundingClientRect().top;
>  const absoluteTop = window.pageYOffset + divTop;
>
>  $('body, html').animate({ scrollTop: absoluteTop - 80+"px"}, 1000);
>
>});
>```
  >  - left, up, down 무한 슬라이드 ani

> ![taper_cap_size_down](https://github.com/Hwangminsun/tapered_coffee/assets/127732251/8965dd51-88a1-4f38-b5f0-b2463dd857e3)
> ```
>function slideMenu() {
> 
>        const activeState = $(".menu").hasClass("active");
>  
>        $(".menu").animate({
>            left: activeState ? "0%" : "-400px"}, 300);
>        }
>        
>        $(".hamburger").on("click",function(){
> 
>            $(".hamburger").toggleClass("open");
>            $(" .menu").toggleClass("active");
> 
>            slideMenu();
>  
>        });
> ```
