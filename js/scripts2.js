$( function() {
    $( "#accordion" ).accordion({
      heightStyle: "content",
        collapsible: true
    });
  } );
  
  
  $( function() {
    $( "#accordion2" ).accordion({
      heightStyle: "content",
        active: false,
  collapsible: true,
    });
  } );
  
  
    $( function() {
    $( "#accordion3" ).accordion({
      heightStyle: "content",
        active: false,
  collapsible: true,
    });
  } );
  
  
$(".accordion-area a").click(function() {
          window.location = $(this).attr('href');
          return false;
       });




	
	
	
	(function($) {
    $(function() {
      $('select').styler({
        selectSearch: true
      });
    });
    })(jQuery);


   $(function(){
              $('.more-n').click(function(){
                $('.more-n').addClass("disp-no");
                $('.hidden-icons').css("display", "inline-block");
              });
            });


// mobile-viewport
if(screen.width<=400){
            $('head').append('<meta name="viewport" content="width=400">');
        } else {
            $('head').append('<meta name="viewport" content="width=device-width">');
        }
        $(window).on("orientationchange",function(){
          if(window.orientation == 0) // Portrait 
          {
            $('head').append('<meta name="viewport" content="width=device-width">');
          } else // Landscape 
          {
            $('head').append('<meta name="viewport" content="width=640">');
          }
});

 
 
// placeholder-focus
 $(document).ready(function () {
 $('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   $(this).attr('placeholder','');
 });
 $('input,textarea').blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
 });
 });
 
 


 // slick-slider
 $(document).ready(function() {

     $('.s-items').slick({
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1
    });

  
    $('.single-item').slick({
        dots: true,
        adaptiveHeight: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, 

{
            breakpoint: 730,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, 
        {
            breakpoint: 501,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

});
  
  
   
 	if($(window).width() > 768) {


$(".scroller-bl").mCustomScrollbar({
					axis:"y",			
					autoDraggerLength:false,
				
				});	


} else { 
    // change functionality for larger screens
}
	
  
  
  /**
 * Vertically center Bootstrap 3 modals so they aren't always stuck at the top
 */
$(function() {
    function reposition() {
        var modal = $(this),
            dialog = modal.find('.modal-dialog');
        modal.css('display', 'block');
        
        // Dividing by two centers the modal exactly, but dividing by three 
        // or four works better for larger screens.
        dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
    }
    // Reposition when a modal is shown
    $('.modal').on('show.bs.modal', reposition);
    // Reposition when the window is resized
    $(window).on('resize', function() {
        $('.modal:visible').each(reposition);
    });
});



