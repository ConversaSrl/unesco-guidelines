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



function CaseStudiesSlideShow(id) {
    this.id = id;
    this.slides = [];
    this.currentSlide = 1;
    this.lastSlide = 1;
}


CaseStudiesSlideShow.prototype.nextSlide = function() {
    if (this.currentSlide >= this.lastSlide) return;
    this.currentSlide++;
    this.update(true);
    this.scrollToMe();
}


CaseStudiesSlideShow.prototype.previousSlide = function() {
    this.currentSlide = Math.max(1, this.currentSlide-1);
    this.update(true, true);
    this.scrollToMe();
}


CaseStudiesSlideShow.prototype.update = function(animated, invertAnimation) {
    var mySlideshow = $("#" + this.id);

    if (animated != true) {
        this.loadSlide(this.currentSlide);
        return;
    }

    var animDirectionContent = "Up";
    var animDirectionImg = "Down";
    if (invertAnimation == true) {
        animDirectionContent = "Down";
        animDirectionImg = "Up";
    }

    var slider = this;
    var content = mySlideshow.find(".cs-slideshow-content");
    content.addClass("animated fadeOut" + animDirectionContent);

    var imgHelper = mySlideshow.find(".cs-slideshow-img-wrapper .cs-slideshow-img.helper");
    var img = mySlideshow.find(".cs-slideshow-img-wrapper .cs-slideshow-img.default");
    imgHelper.css("background-image", mySlideshow.find(".cs-slideshow-img-wrapper .cs-slideshow-img.default").css("background-image"));
    imgHelper.show();

    content.one("animationend", function () {
        content.removeClass("animated fadeOut" + animDirectionContent);
        slider.loadSlide(slider.currentSlide);
        
        content.addClass("animated fadeIn" + animDirectionContent);
        imgHelper.addClass("mask" + animDirectionImg);
        img.addClass("scaleDown");

        content.one("animationend", function () {
            content.removeClass("animated fadeIn" + animDirectionContent);
            imgHelper.hide();
            imgHelper.removeClass("mask" + animDirectionImg);
            img.removeClass("scaleDown");
        });

        // mySlideshow.find(".cs-slideshow-img-wrapper .cs-slideshow-img").css("background-image","url('images/" + myImage + "')");
    });
};


CaseStudiesSlideShow.prototype.loadSlide = function(slideNumber) {
    var mySlideshow = $("#" + this.id);

    var mySlide = $(".cs-slideshow-slide[data-parent='" + this.id + "'][data-index='" + slideNumber + "']");
    var myTitle = mySlide.find(".cs-slideshow-slide-title").html();
    var myText = mySlide.find(".cs-slideshow-slide-text").html();
    var myLink = mySlide.find(".cs-slideshow-slide-link").html();
    var myImage = mySlide.find(".cs-slideshow-slide-image").html();

    mySlideshow.find(".cs-slideshow-content .cs-slideshow-content-title").html(myTitle);
    mySlideshow.find(".cs-slideshow-content .cs-slideshow-content-text").html(myText);
    mySlideshow.find(".cs-slideshow-content .cs-slideshow-content-link").attr("href", myLink);
    mySlideshow.find(".cs-slideshow-content .cs-slideshow-content-link").html(myLink.replace(/(^\w+:|^)\/\//, ''));
    mySlideshow.find(".cs-slideshow-img-wrapper .cs-slideshow-img.default").css("background-image","url('images/" + myImage + "')");
    mySlideshow.find(".cs-slideshow-nav .cs-slideshow-nav-label-index").html((slideNumber < 10 ? '0' : '') + slideNumber);
    mySlideshow.find(".cs-slideshow-nav .cs-slideshow-nav-label-count").html((this.lastSlide < 10 ? '0' : '') + this.lastSlide);
};


CaseStudiesSlideShow.prototype.scrollToMe = function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: Math.min($("#" + this.id + " .cs-slideshow-img-wrapper").offset().top - 30, window.scrollY)
    }, 1000);
}