/* ---------------------------------------- */


$(document).ready(function() {

    /* Hiding the page loader after some time */

    setTimeout(function() {
        $('#page-loader').fadeOut()
    }, 1200)

    /* Nicescroll custom scrollbar */

    $('body').niceScroll({
        cursorcolor:"#FD5F00",
        cursorwidth:"14px",
        background:"transparent",
        cursorborder:"none",
        cursorborderradius:0,
        scrollspeed:70,
        zindex:5,
        horizrailenabled:false
    });

    /* SMOOTHSCROLLING when clicking on any anchor */

    var scroll = new SmoothScroll('a[href*="#"]', {
        speed:1500,
        offset:40
    });

    /* Adding STICKY class to navbar after scrolling for some distance */

    $('#about-me').waypoint(function(direction){
        if(direction == 'down') {
            $('navbar').addClass('sticky');
        } else {
            $('navbar').removeClass('sticky');
        }
    }, {
        offset:'80px'
    });

    /* Burger Menu */
    $('.burger-menu').click(function(){
        $('#wp-h-ul').removeClass('animated slideInRight');
        $('#wp-h-ul').addClass('burger-ul');
        $('#wp-h-ul').slideToggle();
        $('.intro-text').toggleClass('resp-intro-text');

    })

    /* Fix the missing navbar ul after clicking on the burger menu */

    var alterClass = function() {
        var ww = document.body.clientWidth;
        if (ww < 768) {
            $('#wp-h-ul').addClass('burger-ul');
            $('#wp-h-ul').css('display','none')
        } else if (ww > 768) {
            $('#wp-h-ul').removeClass('burger-ul');
            $('#wp-h-ul').css('display','block')
        }
     };
     $(window).resize(function(){
       alterClass();
     });
     //Fire it when the page first loads:
     alterClass();

/*
    var $ww = $(window);

    function fixNavbar() {
        if ($ww.width() > 768){
            return $('#wp-h-ul').removeClass('burger-ul');
            return $('#wp-h-ul').css('display','block')
        }
    }
    $window.resize(resize).trigger('fixNavbar');
*/

    /* Adding ACTIVE class to ech navbar anchor when scrolling window */

    $(window).scroll(function () {

    var y = $(this).scrollTop();

    $('navbar ul li a').each(function (event) {
        if (y >= $($(this).attr('href')).offset().top - 40) {
            $('navbar ul li a').not(this).removeClass('active');
            $(this).addClass('active');
        }
    });

    });

    // Animations when scrolling with animate.css

    $('header').waypoint(function() {
        setTimeout(function() {
            $('#wp-h-a').addClass('animated slideInLeft');
            $('#wp-h-ul').addClass('animated slideInRight');
            $('#wp-h-h1').addClass('animated slideInLeft');
            $('#wp-h-p').addClass('animated slideInLeft');
            $('#wp-h-btn').addClass('animated slideInUp');
            setTimeout(function(){
                $('#wp-h-btn').removeClass('animated slideInUp');
            },1000)
        }, 1300)
    }, {
        offset: '50%'
    });

    $('.about-me').waypoint(function() {
        $('#wp-a-img').addClass('animated slideInUp');
        $('#wp-a-p').addClass('animated fadeInRight');
    }, {
        offset: '50%'
    });
    $('.skills').waypoint(function() {
        $('#wp-s-sks').addClass('animated fadeInLeft');
        $('#wp-s-sks-img').addClass('animated fadeInRight');
    }, {
        offset: '50%'
    });
    $('.works').waypoint(function() {
        $('.item-img').addClass('animated zoomIn');
    }, {
        offset: '50%'
    });
    $('.contact').waypoint(function() {
        $('.form').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    $('footer').waypoint(function() {
        $('#navigation').addClass('animated fadeIn');
        $('#social').addClass('animated fadeIn');
        $('#copyright').addClass('animated fadeIn');
    }, {
        offset: '80%'
    });


    // Maps overlay for contact section

    var map = new GMaps({
        div: '.map',
        lat: 35.9325,
        lng: 10.0230,
        gestureHandling: 'greedy',
        zoom:17
    });

    map.addMarker({
        lat: 35.93120,
        lng: 10.0179,
        title: 'Home',
        infoWindow: {
            content: '<p class="home">Home</p>'
        }
    });

});





/* ---------------------------------------- */
