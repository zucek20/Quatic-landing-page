// menu

const btn = document.querySelector('.arrow')
const menu = document.querySelector('.menu') 

btn.addEventListener('click', function() {
   btn.classList.toggle('active')
   menu.classList.toggle('active')
})

// scroll

$('.link1').on('click', function(){
      $('body, html').animate({
         scrollTop: $('.product').offset().top
      }, 400) 
   })

$('.link2').on('click', function(){
      $('body, html').animate({
         scrollTop: $('.about').offset().top
      }, 400)
   })