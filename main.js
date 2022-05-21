
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var mid1 = document.getElementById('ozgartir1');
    var mid_off11 = mid1.offsetTop + 800;
    var mid_off12 = mid1.offsetTop + 1200;
    var mid2 = document.getElementById('ozgartir2');
    var mid_off21 = mid2.offsetTop + 800;
    var mid_off22 = mid2.offsetTop + 1200;

window.addEventListener('scroll', function() {
  if (scroll > mid_off11 ) {
  mid1.classList.remove('ozgartir11');
  mid1.classList.add('ozgartir12');
  }
  else {
  mid1.classList.remove('ozgartir12');
  mid1.classList.add('ozgartir11');
  }  
  if (scroll > mid_off12 ) {
    mid1.classList.remove('ozgartir12');
    mid1.classList.add('ozgartir13');
    }
    else {
    mid1.classList.remove('ozgartir13');
    mid1.classList.add('ozgartir12');
    }  
if(scroll<mid_off11){
    mid1.classList.remove('ozgartir12');
  mid1.classList.add('ozgartir11');
}
if (scroll > mid_off21 ) {
    mid2.classList.remove('ozgartir21');
    mid2.classList.add('ozgartir22');
    }
    else {
    mid2.classList.remove('ozgartir22');
    mid2.classList.add('ozgartir21');
    }  
    if (scroll > mid_off22 ) {
      mid2.classList.remove('ozgartir22');
      mid2.classList.add('ozgartir23');
      }
      else {
      mid2.classList.remove('ozgartir23');
      mid2.classList.add('ozgartir22');
      }  
  if(scroll<mid_off21){
    mid2.classList.remove('ozgartir22');
    mid2.classList.add('ozgartir21')
};
});
      $(".zoom img").css({
          transform: 'translate3d(-50%, -'+(scroll/100)+'%, 0) scale('+(100 + scroll/5)/100+')',
      });
  });