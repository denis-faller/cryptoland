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
    $(".scroll-link").on('click', function(){
        let elementClick = $(this).attr("href");
        let destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });
    
    let clock;

    clock = $('.clock').FlipClock({
        clockFace: 'DailyCounter',
	countdown: true
    });
    clock.setTime(3600 * 24 * 3);
    clock.setCountdown(true);
    clock.start();
    
    $('.popup-youtube').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
    });
    $.extend(true, $.magnificPopup.defaults, {  
        iframe: {
            patterns: {
               youtube: {
                  index: 'youtube.com/', 
                  id: 'v=', 
                  src: 'http://www.youtube.com/embed/%id%?autoplay=1' 
              }
            }
        }
    });
    
    AOS.init({
        once: true
    });
    
    $('.counter').countUp({
        'time': 2000,
        'delay': 20
    });
    
    $('.jarallax').jarallax({
        speed: 0.6
    });
    
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [
              {
                label: 'Dataset',
                data: [40, 15, 10, 20],
                backgroundColor: ['#00B1CC', '#0009B2', '#00CC0E', '#FF3A24'],
              }
            ],
            labels: [
                "Light blue",
                "Dark blue",
                "Green",
                "Red",
            ]
          },
        options: {
            responsive: true,
            cutout: "90%",
            borderWidth: 0,
            plugins: {
                legend: {
                    display: false
              }
            }
        },
    });
    
    $(".accordion a").on('click', function(){
        $(".accordion-link.active").removeClass("active");
        $(".accordion-text.active").slideUp();
        $(this).addClass("active");
        $(this).next('p').slideToggle();
        $(this).next('p').addClass("active");
    });
});