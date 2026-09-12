$(document).ready(function () {


    /* =========================
       اقرأ المزيد
    ========================== */

    $(".read-more").click(function () {

        $(this).prev(".more-text").slideToggle(500);


        if ($(this).text() == "اقرأ المزيد") {

            $(this).text("اقرأ أقل");

        } else {

            $(this).text("اقرأ المزيد");

        }

    });


    /* =========================
       الانتقال إلى الخبر
    ========================== */

    $(".slider-content a").click(function (event) {

        event.preventDefault();


        var target = $(this).attr("href");


        $("html, body").animate({

            scrollTop: $(target).offset().top - 20

        }, 600);

    });


    /* =========================
       حركة شريط الأخبار
    ========================== */

    var newsTrack = $(".news-track");

    var newsPosition = 0;

    var newsSpeed = 0.7;

    var isPaused = false;


    /* إيقاف الحركة عند مرور الماوس */

    $(".news-slider").mouseenter(function () {

        isPaused = true;

    });


    /* تشغيل الحركة بعد خروج الماوس */

    $(".news-slider").mouseleave(function () {

        isPaused = false;

    });


    /* الحركة */

    function moveNews() {

        if (!isPaused) {

            newsPosition -= newsSpeed;

            newsTrack.css(
                "transform",
                "translateX(" + newsPosition + "px)"
            );


            /*
             * لأننا كررنا الأخبار الثلاثة،
             * نعيد الشريط إلى البداية
             * عندما تنتهي المجموعة الأولى.
             */

            var firstGroupWidth =
                newsTrack.children(".slider-card").eq(0).outerWidth(true) +
                newsTrack.children(".slider-card").eq(1).outerWidth(true) +
                newsTrack.children(".slider-card").eq(2).outerWidth(true);


            if (Math.abs(newsPosition) >= firstGroupWidth) {

                newsPosition = 0;

            }

        }


        requestAnimationFrame(moveNews);

    }


    moveNews();

});