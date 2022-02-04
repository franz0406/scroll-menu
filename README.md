## 스크롤 메뉴 - Smooth Scroll


메뉴클릭시 부드럽게 화면스크롤되고 해당 영역에 도달하면 클릭헌 메뉴 스타일 변경 효과.

### HTML
```html
<ul>
    <li class="on"><a href="#section1">section 1</a></li>
    <li><a href="#section2">section 2</a></li>
    <li><a href="#section3">section 3</a></li>
</ul>

<section id="section1">
    <h2>section 1</h2>
</section>
<section id="section2">
    <h2>section 2</h2>
</section>				
<section id="section3">
    <h2>section 3</h2>
</section>
```
### JQuery
```javascript

const menu = $('ul').find('li'),
      section = $('section');

menu.click(function(e){    
    const menuIndex = $(this).index();
    const sectionOffsetTop = section.eq(menuIndex).offset().top;

    e.preventDefault();
    $('html, body').animate({scrollTop: sectionOffsetTop}, 500);
});

$(window).scroll(function(){
    const scrollValue = $(document).scrollTop();

    section.each(function(index, item){
        if( scrollValue >= $(item).offset().top ){
        menu.eq(index).addClass('on').siblings().removeClass('on');
    }
});
// 1. 메뉴 클릭시 클릭한 요소의 index 가져오기.
// 2. index의 해당하는 section요소의 위치에서 상단까지의 거리 값 가져오기 
// 3. animate() 메소드를 이용하여 'html, body'의 스크롤값 변경.

// 4. 스크롤시 현재 사용자의 스크롤양을 가져오기.
// 5. section요소마다 할일을 주고 해당 section요소의 상단까지의 거리가
//    사용자 스크롤양과 같거나 커지면 클래스 추가.
```
---
---
### JavaScript
```javascript
const menu = document.querySelectorAll('ul > li');
const section = document.querySelectorAll('section');

menu.forEach((item, index )=>{
  item.addEventListener('click', (e)=>{
    const sectionOffsetTop = section[index].offsetTop;

    e.preventDefault();
    window.scrollTo({top:sectionOffsetTop, left:0, behavior:'smooth'});
  });
});

window.addEventListener('scroll', function(){
  const scrollValue = this.scrollY;

  section.forEach((item, index)=>{
    if( scrollValue >= item.offsetTop ){
      for(var i = 0; i < menu.length; i++){
        menu[i].classList.remove("on");
      }
      menu[index].classList.add("on");
    }
  });
});
```
- window.scroll(x, y)    해당 위치로 이동. 절대값
- window.scrollTo(x, y)  해당 위치로 이동. 절대값
- window.scrollBy(x, y)  현재위치에서 이동. 상대값
- DOM.scrollIntoView()    DOM의 위치로 이동.  
---

CSS 의 `scroll-behavior: smooth;`속성이나,  
JavaScript 의 `behavior:'smooth'` 속성은 IOS 에서 지원되지 않는다.  

**Polyfill을 사용해서 문제해결**
js폴더의 smoothscroll.js를 로드하면 해결

#### Polyfill 이란?
브라우저가 지원하지 않는 자바스크립트 코드를 지원 가능하도록 변환한 코드를 뜻한다. 하위 브라우저가 지원하는 자바스크립트 코드를 사용해 자바스크립트의 최신 기능을 똑같이 구현하는 방식이다.