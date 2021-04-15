

/* ================================
            REsponsive Tabs
=================================*/
$(function () {
    $("#services-tabs").responsiveTabs({
        startCollapsed: 'accordion'

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


/* ================================
            Read more
=================================*/
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }