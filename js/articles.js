$(document).ready(function () {


    /* =========================
       زر اقرأ المقال
    ========================== */

    $(".read-more").click(function () {


        $(this).prev(".more-text").slideToggle(500);


        if ($(this).text() == "اقرأ المقال") {

            $(this).text("إخفاء المقال");

        } else {

            $(this).text("اقرأ المقال");

        }

    });


    /* =========================
       تأثير عند المرور على المقال
    ========================== */

    $(".article-card").mouseenter(function () {

        $(this).css("transform", "translateY(-5px)");

    });


    $(".article-card").mouseleave(function () {

        $(this).css("transform", "translateY(0)");

    });


});