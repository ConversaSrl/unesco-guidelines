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
    var Gauge = window.Gauge;
    var scrollGauge = Gauge(document.getElementById("scrollGauge"), {
        max: $("#main").height() + $("#main").offset().top - window.innerHeight,
        label: function() { return '<i class="fa fa-chevron-down fa-lg"></i>' },
        value: 50,
        color: function () { return "#096fc0" },
        dialStartAngle: -90,
        dialEndAngle: -90.001,
        radius: 0,
        showValue: false
    });
    $(window).scroll(function () { scrollGauge.setValue(window.scrollY) });

});