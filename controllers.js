$(document)
  .ready(function() {
    

    function goToByScroll(id){
        // Remove "link" from the ID
      id = id.replace("link", "");
        // Scroll
      $('html,body').animate({
          scrollTop: $("#"+id).offset().top},
          'slow');
    }

    // Nav bar
    $('.menu_item').on("click",function(){

       // Active display control
       $('li').removeClass("active");
       $(this).addClass("active");

       // When a menu is selected, hide the menu
       var width = $(window).width();
       if(width<768)
          $('.navbar-toggle').click();

    });

  
    $('.nav > li > a').click(function(){
    
     goToByScroll($(this).attr('class'));
        
    });

    $('#logo').click(function(){
    alert("click!");
     goToByScroll($(this).attr('class'));

        
    });



 

    // Adaptive cover photo
    var width = $(window).width();
 
    if(width<600){
     $('#cover_photo1').attr({"src":"img/cover1_mobile.jpg"});
     $('#cover_photo2').attr({"src":"img/cover2_mobile.jpg"});
     $('#cover_photo3').attr({"src":"img/cover3_mobile.jpg"});
     $('#products-web').hide();
     $('#products-mobile').show();
    
  }else{
     $('#cover_photo1').attr({"src":"img/cover1.jpg"});
     $('#cover_photo2').attr({"src":"img/cover2.jpg"});
     $('#cover_photo3').attr({"src":"img/cover3.jpg"});
     $('#products-web').show();
     $('#products-mobile').hide();
  }


  });





 $( window ).resize(function() {
 
  var width = $( window ).width();
  
  console.log(width);
  if(width<600){
     $('#cover_photo1').attr({"src":"img/cover1_mobile.jpg"});
     $('#cover_photo2').attr({"src":"img/cover2_mobile.jpg"});
     $('#cover_photo3').attr({"src":"img/cover3_mobile.jpg"});
      $('#products-web').hide();
      $('#products-mobile').show();
  }
     if(width>600){
     $('#cover_photo1').attr({"src":"img/cover1.jpg"});
     $('#cover_photo2').attr({"src":"img/cover2.jpg"});
     $('#cover_photo3').attr({"src":"img/cover3.jpg"});
      $('#products-web').show();
      $('#products-mobile').hide();
  }

});
  