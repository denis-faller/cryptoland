$(document).ready(function(){
    $(".switch-locale").click(function(){
        $(".switch-locale").toggleClass("active");
        $(".locale-list").toggleClass("active");
    });
    $(".locale-list ul li").click(function(){
        $(".switch-locale").html($(this).html());
        $(".switch-locale").toggleClass("active");
        $(".locale-list").toggleClass("active");
    });
    $(".locale-list ul li").click(function(){
        $(".switch-locale").html($(this).html());
        $(".switch-locale").toggleClass("active");
        $(".locale-list").toggleClass("active");
    });
    $(".menu-burger-header").click(function(){
        $(".wrap-menu").toggleClass("active");
        $(".wrap-burger").toggleClass("active");
        $(".btn-close").toggleClass("active");
        $("header").toggleClass("open");
    });
     $(window).on('scroll', function(){
        if(!$("header").hasClass("active")){
            $("header").addClass("active");
        }
        else if($(window).scrollTop() == 0){
            $("header").removeClass("active");
        }
     });
});