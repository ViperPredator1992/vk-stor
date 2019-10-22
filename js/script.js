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
    
});