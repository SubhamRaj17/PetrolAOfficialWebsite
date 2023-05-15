/*---------- Faqs Accordion ----------*/
$(document).ready(function(){
  
    $(".accordion-container-1 .accordion").click(function(){

      // self clicking close
      if($(this).hasClass("active")){
        $(this).removeClass("active");
        $(this).find("i").removeClass("fa-minus").addClass("fa-plus")	
      }

      else{
        $(".accordion-container-1 .accordion").removeClass("active");
        $(".accordion-container-1 .accordion .accordion-heading i").removeClass("fa-minus").addClass("fa-plus");
        $(this).addClass("active");
        $(this).find("i").removeClass("fa-plus").addClass("fa-minus")
      }
    })

    $(".accordion-container-2 .accordion").click(function(){

      // self clicking close
      if($(this).hasClass("active")){
        $(this).removeClass("active");
        $(this).find("i").removeClass("fa-minus").addClass("fa-plus")	
      }

      else{
        $(".accordion-container-2 .accordion").removeClass("active");
        $(".accordion-container-2 .accordion .accordion-heading i").removeClass("fa-minus").addClass("fa-plus");
        $(this).addClass("active");
        $(this).find("i").removeClass("fa-plus").addClass("fa-minus")
      }
    })

  })