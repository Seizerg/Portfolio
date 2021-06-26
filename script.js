$(document).ready(function(){
  $(window).scroll(function(){
    if ( this.scrollY > 20) {
      $(".navbar").addClass("sticky");

    }
    else{
      $(".navbar").removeClass("sticky");

    }
  })
  // typing animation
  var typed= new Typed(".typing",{
    strings: ["Developer","UI Designer","Gamer","Overthinker" ],
    typeSpeed: 100,
    backSpeed:60,
    loop: true
  })
  var typed= new Typed(".typing-2",{
    strings: ["Developer","UI Designer","Gamer","Overthinker" ],
    typeSpeed: 100,
    backSpeed:60,
    loop: true
  })
  // toggle menu
  $(".menu-btn").click(function(){
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
    $(".menu-btn").toggleClass("active");
  });
  //owl OwlCarousel
$('.owl-carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0:{
        items: 1,
        nav: false
      },
      600:{
        items:2,
        nav:false
      },
      1200:{
        items:3,
        nav:false
      },
      1800:{
        items:4,
        nav:false
      },
      2400:{
        items:5,
        nav:false
      }
    }

});


});
