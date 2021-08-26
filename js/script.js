$(document).ready(function(){
    if($(window).scrollTop() != 0){
        $("header").addClass("active");
    }
    $(window).on('scroll', function(){
        if(!$("header").hasClass("active")){
            $("header").addClass("active");
        }
        else if(($(window).scrollTop() == 0) && !$("header").hasClass("open")){
            $("header").removeClass("active");
        }
    });
    $(window).on('resize', function () {
        let curW = $(this).width();
        if((curW > 1350)){
            if($(window).scrollTop() == 0){
                $("header").removeClass("active");
            }
            $("header").removeClass("open");
        }
    });
    $(".menu-burger-header").on('click', function(){
        if($(window).scrollTop() == 0 && $("header").hasClass("active")){
            $("header").removeClass("active");
        }
        else{
            $("header").addClass("active");
        }
        $("header").toggleClass("open");
    });
    $(".switch-locale").on('click', function(){
        $(".switch-locale").toggleClass("active");
        $(".locale-list").toggleClass("active");
    });
    $(".locale-list ul li").on('click', function(){
        $(".switch-locale").html($(this).html());
        $(".switch-locale").toggleClass("active");
        $(".locale-list").toggleClass("active");
    });
    let clock;

    clock = $('.clock').FlipClock({
        clockFace: 'DailyCounter',
	countdown: true
    });
    clock.setTime(3600 * 24 * 3);
    clock.setCountdown(true);
    clock.start();
});