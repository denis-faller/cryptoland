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
        $(".wrapper").toggleClass("active");
        $("header").toggleClass("active");
        $(".header").toggleClass("active");
    });
});