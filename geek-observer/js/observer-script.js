jQuery(document).ready(function() {

    $('#about_1, #about_2, #about_3').css({
        backgroundPosition: "0px -707px"
    }).mouseover(function() {
        if($(this).hasClass('aboutActive')) {
            //do nothing
        } else {
            $(this).stop().animate({
                backgroundPosition: "(0px -352px)"
            }, {
                duration: 400,
                easing: "easeOutExpo"
            })
        }
    }).mouseout(function() {
        if($(this).hasClass('aboutActive')) {
            //do nothing
        } else {
            $(this).stop().animate({
                backgroundPosition: "(0px -707px)"
            }, {
                duration: 400,
                easing: "easeOutExpo"
            })
        }
        if($('.aboutActive').attr('id') == 'about_1') {
            $('#about_2_content').hide();
            $('#about_3_content').hide();
            $('#about_1_content').fadeIn('slow', function() {
                // Animation complete
            });
        } else if($('.aboutActive').attr('id') == 'about_2') {
            $('#about_1_content').hide();
            $('#about_3_content').hide();
            $('#about_2_content').fadeIn('slow', function() {
                // Animation complete
            });
        } else {
            $('#about_1_content').hide();
            $('#about_2_content').hide();
            $('#about_3_content').fadeIn('slow', function() {
                // Animation complete
            });
        }
    }).mouseover(function(){

        if($(this).attr('id') == 'about_1') {
            $('#about_2_content').hide();
            $('#about_3_content').hide();
            $('#about_1_content').fadeIn('slow', function() {
                // Animation complete
            });
        } else if($(this).attr('id') == 'about_2') {
            $('#about_1_content').hide();
            $('#about_3_content').hide();
            $('#about_2_content').fadeIn('slow', function() {
                // Animation complete
            });
        } else {
            $('#about_1_content').hide();
            $('#about_2_content').hide();
            $('#about_3_content').fadeIn('slow', function() {
                // Animation complete
            });
        }
    }).click(function() {
        $('#about_1, #about_2, #about_3').removeClass('aboutActive');
        $('#about_1, #about_2, #about_3').stop().animate({
            backgroundPosition: "(0px -707px)"
        }, {
            duration: 1,
            easing: "easeOutExpo"
        })
        $(this).stop().animate({
            backgroundPosition: "(0px -352px)"
        }, {
            duration: 700,
            easing: "easeOutExpo"
        })
        $(this).addClass('aboutActive');
        window.location.hash = "#" + $(this).attr('name');
        $('#about_1 img, #about_2 img, #about_3 img').fadeOut('fast');
        $('.aboutActive img').fadeIn("fast");
        if($(this).attr('id') == 'about_1') {
            $('#about_2_content').hide();
            $('#about_3_content').hide();
            $('#about_1_content').fadeIn('slow', function() {
                // Animation complete
            });
        } else if($(this).attr('id') == 'about_2') {
            $('#about_1_content').hide();
            $('#about_3_content').hide();
            $('#about_2_content').fadeIn('slow', function() {
                // Animation complete
            });
        } else {
            $('#about_1_content').hide();
            $('#about_2_content').hide();
            $('#about_3_content').fadeIn('slow', function() {
                // Animation complete
            });
        }
    })
    $('.aboutActive').stop().animate({
        backgroundPosition: "(0px -352px)"
    }, {
        duration: 1,
        easing: "easeOutExpo"
    })
    $('.aboutActive img').fadeIn('fast');



    $('.form-box button[type="submit"]').bind('click', function(e) {
        e.preventDefault();
        $('.observer-loading').show();

        $input = $('.form-box input,.form-box textarea');
        pen_name = $input.filter('[name="pen_name"]').val();
        real_name = $input.filter('[name="real_name"]').val();
        blog = $input.filter('[name="blog"]').val();
        company = $input.filter('[name="company"]').val();
        position = $input.filter('[name="position"]').val();
        product = $input.filter('[name="product"]').val();
        tel = $input.filter('[name="tel"]').val();
        weibo_url = $input.filter('[name="weibo_url"]').val();
        bio = $input.filter('[name="bio"]').val();
        agree = $input.filter('[name="agree"]').attr('checked')
        if(agree) {
            jQuery.post('/observer/submit', {
                pen_name: pen_name,
                real_name: real_name,
                blog: blog,
                company: company,
                position: position,
                product: product,
                tel: tel,
                weibo_url: weibo_url,
                bio: bio
            }, function(data, textStatus, xhr) {
                if(!data.error) {
                    setTimeout(function() {
                        $('.form-box').slideUp('slow').after('<div class="line-box observer-line icons"><span class="success"><i class="observer-message observer-success icons"></i>申请已提交，稍后我们将以邮件形式通知您审核结果，请注意查收。</span></div>');
                    }, 1000);

                } else {
                    $('.observer-message span').html($(data.message)[0]);
                    $('.observer-message').slideDown();
                }
                setTimeout(function() {
                    $('.observer-loading').hide();
                }, 1000);
            }, 'json');
        } else {
            setTimeout(function() {
                $('.observer-message span').html('请同意用户协议');
                $('.observer-message').slideDown();
                $('.observer-loading').hide();
            }, 1000);
        }
    })
});