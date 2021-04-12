/* ================================
            Preloader
=================================*/
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/* ================================
            Team
=================================*/
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items:1  
            },
            480: {
                items:2
            }
        }
    });
});

/* ================================
            REsponsive Tabs
=================================*/
$(function () {
    $("#services-tabs").responsiveTabs({

    });
});
/* ===========================================
            Portfolio
==============================================*/
$(window).on('load', function () {

    // Initialize Isotope 
    $('#isotope-container').isotope({});

    // filter items on button click 
    $('#isotope-filters').on('click', 'button', function () {

        //get filter value
        var filtervalue = $(this).attr('data-filter');

        // filter portfolio items
        $("#isotope-container").isotope({
            filter: filtervalue
        });

        //active button
        $('#isotope-filters').find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

/* ===========================================
            Magnifier
==============================================*/
$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
/* ================================
            Testimonial slider
=================================*/
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 500,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});


/*Smooth scrolling*/
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        // get section id
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1000, "easeInOutExpo");
    });
});