/* 제이쿼리 코드

  $(function(){ 
    
    const menuList = $('#top_menu').find('li'),
          menuContents = $('#contents').find('section');
    
    menuList.click(function(e){    
      const menuIndex = $(this).index();
      const menuContentOffsetTop = menuContents.eq(menuIndex).offset().top;
      
      e.preventDefault();
      $('html, body').animate({scrollTop:menuContentOffsetTop}, 500);
    });

    $(window).scroll(function(){
      const scrollValue = $(document).scrollTop();
      
      menuContents.each(function(index, item){
        if( scrollValue >= $(item).offset().top ){
          menuList.eq(index).addClass('on').siblings().removeClass('on');
        }
      });
    }); 
  });

*/

// 자바스크립트 코드

document.addEventListener('DOMContentLoaded', function(){

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

});