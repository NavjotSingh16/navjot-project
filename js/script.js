/**************************************/
/*      SMOOTH SCROLL FUNCTION        */
/**************************************/
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          // scrollTop: target.offset().top - 41+'px'
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
$('.nav').localScroll();

window.onload=function(){

  document.getElementById("menu").addEventListener("click", showMenu);

  function showMenu() {

    const nav = document.getElementById("nav");
    if (nav.style.display === 'block') {
      nav.style.display = "none";
    } else {
      nav.style.display = "block";
    }
  };

}
