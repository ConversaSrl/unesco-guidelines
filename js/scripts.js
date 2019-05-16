$( document ).ready(function() {

    $(".section-menu a").mouseenter(function (e) {
        e.preventDefault();
        $("#toc-panel").css("width", $(".container").width() + "px");
        $(".toc-panel").show();
        $(".toc-section").hide();
        $("div[data-section-title='" + $(this).html() + "']").show();
    });

    $(".navbar").mouseleave(function (e) {
        $(".toc-panel").hide();
    });

    $(".toc-panel").mouseenter(function (e) {
        e.preventDefault();
        $(".toc-panel").show();
    });

    $(".toc-panel").mouseleave(function (e) {
        $(".toc-panel").hide();
    });

    $("<p>&nbsp;</p>").insertBefore(".col-md-8 .post-content > h1:not(:first)");


    // Initialize Scroll Gauge
    var maxScroll = $("#main").height() + $("#main").offset().top - window.innerHeight;
    var Gauge = window.Gauge;
    var scrollGauge = document.getElementById("scrollGauge");
    if (scrollGauge != null) {
        scrollGauge = Gauge(scrollGauge, {
            max: maxScroll,
            label: function() { return '<i class="fa fa-chevron-down fa-lg"></i>' },
            value: 50,
            color: function () { return "#096fc0" },
            dialStartAngle: -90,
            dialEndAngle: -90.001,
            radius: 0,
            showValue: false
        });
    }

    $(window).scroll(function () {
        var watershed = $("nav.navbar").offset().top + $("nav.navbar").height();
        if (scrollGauge != null) {
            scrollGauge.setValue(window.scrollY);
            watershed = $(".scroll-widget").offset().top + $(".scroll-widget").height();
        }

        if (window.scrollY > watershed) {
            var maxScroll = $("#main").height() + $("#main").offset().top - window.innerHeight;
            $(".scroll-widget-line-value").css("width", (window.scrollY / maxScroll) * 100 + "%");
            $(".scroll-widget-line").show();
        } else {
            $(".scroll-widget-line").hide();
        }
    });

    $(".scroll-widget").click(function() { 
        $('html, body').animate({
            scrollTop: $('.summary').offset().top
        }, 500);
    });

    $(".guidelines-menu-toggler").click(function() { 
        if ($(this).hasClass("open")) {
            hideMobileMenu();
        } else {
            showMobileMenu();
        }
    }); 
});

function showMobileMenu() {
    $(".guidelines-menu-toggler").addClass("open");
    $("#main").fadeOut(300);
    $("#header-background-image-container").animate({
        height: "100%"
    }, 300, function () {
        $(".mobile-menu-wrapper").fadeIn(600);
    });
}
function hideMobileMenu() {
    $(".guidelines-menu-toggler").removeClass("open");
    $(".mobile-menu-wrapper").fadeOut(300);
    $("#header-background-image-container").animate({
        height: "766px"
    }, 300, function () {
        $("#main").fadeIn(600);
    });
}

function switchLanguage() {
    if (window.location.pathname.startsWith("/en-")) {
        window.location.href = "it-" + window.location.pathname.substr(4);
    } else if (window.location.pathname.startsWith("/it-")) {
        window.location.href = "en-" + window.location.pathname.substr(4);
    }
}