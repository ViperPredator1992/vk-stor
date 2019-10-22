$(document).ready(function () {
   
    $(".burger").click(function(){
        if($(this).next(".nav").css("display")=="none") {
            $(this).next(".nav").slideDown();
            $(".burger").addClass("burger__open");
        }
        else {
            $(".burger").removeClass("burger__open");
            $(this).next(".nav").slideUp();
        }
    });

    $(".table tbody tr td a").click(function(e){
        e.preventDefault();
        $('.modal').addClass('modal-active');
        $('.mask').addClass('mask-active');
    });

    $(".mask, .modal-close__icon").click(function(e){
        e.preventDefault();
        $('.modal').removeClass('modal-active');
        $('.mask').removeClass('mask-active');
    });
    
});