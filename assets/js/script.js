$(document).ready(function(){

  $('.scroll-top').hide();
  
  /*---------- Mobile-Navbar Toggler ----------*/
  let sideBar = document.querySelector('.mobile-menu');
  let menuBar = document.querySelector(".header #menu-btn");

  menuBar.onclick = () =>{
    sideBar.classList.toggle('active');
    menuBar.classList.toggle("fa-times");
    $(".nav-link .main-nav-link").removeClass("active");
    $(".nav-link .sub-nav-link").removeClass("active").slideUp()
    $(".nav-link .main-nav-link i").removeClass("fa-minus").addClass("fa-plus");
  }
  
  // On Load/Scroll
  $(window).on('load scroll',function(){
    sideBar.classList.remove('active');
    menuBar.classList.remove("fa-times");
    $(".nav-link .main-nav-link").removeClass("active");
    $(".nav-link .sub-nav-link").removeClass("active").slideUp()
    $(".nav-link .main-nav-link i").removeClass("fa-minus").addClass("fa-plus");	

    /*--------------- Sticky Header ---------------*/
    if($(window).scrollTop() > 68){
      $('.header').addClass('active');
    }else{
      $('.header').removeClass('active');
    }

    /*--------------- Scroll-Top ---------------*/
    if ($(this).scrollTop() > 100) {
      $('.scroll-top').fadeIn();
    } else {
      $('.scroll-top').fadeOut();
    }

  
  });

});


