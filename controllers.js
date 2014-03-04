$(document)
  .ready(function() {
    


    //product
    $(".products_section_part").on("mouseover",function(){
        var id = $(this).attr("id").split("_")[1];
        $(".products_info").removeClass("product_name_highlight");
        $("#part"+id).addClass("product_name_highlight");
    });

    $("#part0").addClass("product_name_highlight");
    $("#part_0").on("mouseover",function(){
        var id = $(this).attr("id").split("_")[1];
        $(".products_info").removeClass("product_name_highlight");
        $("#part0").addClass("product_name_highlight");
    });
    ////////////////////////////////////////////////////////////

   

    $("#story0").show();
    $(".sub_item").on("click",function(){
      
      var id = $(this).attr("id").split("_")[1];
     
      $(".about_story").hide();
      $("#story"+id).show();

    });

   


    //about
    $("#blanket").on("click",function(){
      popup('popUpDiv');
      stopFilm();
    });

    $("#close_film").on("click",function(){
      stopFilm();
    });


    ////////////////////////////////////////////////////////////
    //team
    $(".face").on("mouseover",function(){
      var id = $(this).attr("id").split('_')[1];
      $(".tape").hide();
      $("#tape"+id).show();
      
    });



    ////////////////////////////////////////////////////////////

    $("#play_img").on("mouseover",function(){
        if($("#play_img").attr("src") == "img/play.gif"){
           $("#play_img").attr("src","img/play.png");
        }else{
           $("#play_img").attr("src","img/play.gif");
        }
        
    });


    function stopFilm(){
      //First get the  iframe URL
        var url = $('#youtubeplayer').attr('src');

        //Then assign the src to null, this then stops the video been playing
        $('#youtubeplayer').attr('src', '');

        // Finally you reasign the URL back to your iframe, so when you hide and load it again you still have the link
        $('#youtubeplayer').attr('src', "//www.youtube.com/embed/zH157ZvUj50");
    }
    function goToByScroll(id){

        // Remove "link" from the ID
      id = id.replace("link", "");
        // Scroll
      $('html,body').animate({
          scrollTop: $("#"+id).offset().top},'slow');
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

  
    $('.nav > li > a').click(function(event){
    
     //prevent the default --> prevent the flashing of page before scholling
     event.preventDefault();

     goToByScroll($(this).attr('class'));
        
    });

    $('#logo').click(function(){
    
       goToByScroll('home');

        
    });
    
    adaptive();

  });


function adaptive(){
 // Adaptive cover photo
  var width = $(window).width();
 
  if(width<400){
     $("#watch_film").attr("href","//www.youtube.com/embed/zH157ZvUj50")
                     .attr("target","_blank");;
  }else{
     $("#watch_film").on("click",function(){
        popup('popUpDiv');
      });
  }

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

  
}

 $( window ).resize(function() {
     adaptive();


});
  