$(document).ready(function () {


    /* =========================
       تصفية عناصر المعرض
    ========================= */

    $(".filter-btn").click(function () {


        var filter = $(this).attr("data-filter");


        /* تغيير الزر النشط */

        $(".filter-btn").removeClass("active");

        $(this).addClass("active");



        /* عرض جميع العناصر */

        if (filter == "all") {

            $(".gallery-item").fadeIn();

        }


        /* عرض قسم معين */

        else {

            $(".gallery-item").hide();

            $("." + filter).fadeIn();

        }

    });



    /* =========================
       تكبير الصورة
    ========================= */

    $(".gallery-image").click(function () {


        var imageSource = $(this).attr("src");

        var imageText = $(this).attr("alt");


        $("#largeImage").attr("src", imageSource);

        $("#modalCaption").text(imageText);


        $("#imageModal").fadeIn();

    });



    /* =========================
       إغلاق الصورة
    ========================= */

    $(".close-modal").click(function () {

        $("#imageModal").fadeOut();

    });



    /* إغلاق النافذة عند الضغط
       على الخلفية */

    $("#imageModal").click(function (event) {


        if (event.target.id == "imageModal") {

            $(this).fadeOut();

        }

    });


});