$( document ).ready(function() {
    $(".fade").fadeTo(1000,1,'swing');

$('.hideme').css({"position":"relative","opacity": 0,  "top":"+=50"});

    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hideme').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight() -300;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                //
                $(this).animate({
                    top:0,

                    opacity:1
                },500);


            }

        });

    });
    
$('#language').on("click", function () {

  $(this).html("IT");
});


});
