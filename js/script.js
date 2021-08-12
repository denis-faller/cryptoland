$(document).ready(function(){
    if($(window).scrollTop() != 0){
        $("header").addClass("active");
     }
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
        if($(window).scrollTop() == 0 && $("header").hasClass("active")){
            $("header").removeClass("active");
        }
        else{
            $("header").addClass("active");
        }
        $("header").toggleClass("open");
    });
    $(window).resize(function() {
        let curW = $(this).width();
        if((curW > 1350)){
            if($(window).scrollTop() == 0){
                $("header").removeClass("active");
            }
            $("header").removeClass("open");
            $(".wrap-menu").removeClass("active");
            $(".wrap-burger").removeClass("active");
            $(".btn-close").removeClass("active");
        }
    });
    $(window).on('scroll', function(){
        if(!$("header").hasClass("active")){
            $("header").addClass("active");
        }
        else if(($(window).scrollTop() == 0) && !$("header").hasClass("open")){
            $("header").removeClass("active");
        }
    });
});