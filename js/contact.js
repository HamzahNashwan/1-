$(document).ready(function () {


    /* =========================
       عند إرسال النموذج
    ========================= */

    $("#contactForm").submit(function (event) {


        /* منع إعادة تحميل الصفحة */

        event.preventDefault();



        /* قراءة القيم */

        var name =
            $("#name").val().trim();

        var email =
            $("#email").val().trim();

        var subject =
            $("#subject").val().trim();

        var message =
            $("#message").val().trim();



        /* متغير لمعرفة
           هل البيانات صحيحة */

        var isValid = true;



        /* إزالة الأخطاء السابقة */

        $(".error-message").text("");

        $(".form-control")
            .removeClass("input-error");



        /* =========================
           التحقق من الاسم
        ========================= */

        if (name == "") {

            $("#nameError")
                .text("يرجى كتابة الاسم");

            $("#name")
                .addClass("input-error");

            isValid = false;

        }

        else if (name.length < 3) {

            $("#nameError")
                .text("الاسم يجب أن يكون 3 أحرف على الأقل");

            $("#name")
                .addClass("input-error");

            isValid = false;

        }



        /* =========================
           التحقق من البريد
        ========================= */

        if (email == "") {

            $("#emailError")
                .text("يرجى كتابة البريد الإلكتروني");

            $("#email")
                .addClass("input-error");

            isValid = false;

        }

        else if (!validateEmail(email)) {

            $("#emailError")
                .text("البريد الإلكتروني غير صحيح");

            $("#email")
                .addClass("input-error");

            isValid = false;

        }



        /* =========================
           التحقق من الموضوع
        ========================= */

        if (subject == "") {

            $("#subjectError")
                .text("يرجى كتابة الموضوع");

            $("#subject")
                .addClass("input-error");

            isValid = false;

        }



        /* =========================
           التحقق من الرسالة
        ========================= */

        if (message == "") {

            $("#messageError")
                .text("يرجى كتابة الرسالة");

            $("#message")
                .addClass("input-error");

            isValid = false;

        }

        else if (message.length < 10) {

            $("#messageError")
                .text("الرسالة يجب أن تكون 10 أحرف على الأقل");

            $("#message")
                .addClass("input-error");

            isValid = false;

        }



        /* =========================
           إذا كانت البيانات صحيحة
        ========================= */

        if (isValid == true) {


            /* =====================
               AJAX
            ===================== */

            $.ajax({

                url: "contact.html",

                type: "POST",

                data: {

                    name: name,

                    email: email,

                    subject: subject,

                    message: message

                },


                /* قبل الإرسال */

                beforeSend: function () {

                    $(".send-btn")
                        .prop("disabled", true)
                        .text("جاري الإرسال...");

                },


                /* في حالة النجاح */

                success: function () {

                    showToast();

                    $("#contactForm")[0]
                        .reset();

                },


                /* في حالة عدم وجود Server
                   نعرض نجاح تجريبي للمشروع */

                error: function () {

                    showToast();

                    $("#contactForm")[0]
                        .reset();

                },


                /* بعد انتهاء AJAX */

                complete: function () {

                    $(".send-btn")
                        .prop("disabled", false)
                        .html(
                            '<i class="fa-solid fa-paper-plane"></i> إرسال الرسالة'
                        );

                }

            });

        }


    });



    /* =========================
       التحقق من شكل البريد
    ========================= */

    function validateEmail(email) {


        var emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        return emailPattern.test(email);

    }



    /* =========================
       Toast Notification
    ========================= */

    function showToast() {


        $("#toastMessage")
            .stop(true, true)
            .fadeIn();


        setTimeout(function () {


            $("#toastMessage")
                .fadeOut();


        }, 3000);

    }


});