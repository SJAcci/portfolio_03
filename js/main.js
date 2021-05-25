//popUp
$(document).ready(function(){
    function setCookie(name, value, expiredays){
        var todayDate = new Date();
        todayDate.setDate(todayDate.getDate() + expiredays);
        document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';'
    }
    
    var popup = '.popUp';
    var never = '.never';
    var close = '.close';
    
    $(popup).find(close).click(function(){
        $(popup).stop().fadeOut(0);
        $('html, body').css('overflow','visible');
    });

    var cookieData = document.cookie;

    $(popup).find(never).click(function(){
        setCookie('exCookie','done',1);
        $(popup).stop().fadeOut(0);
        $('html, body').css('overflow','visible');
    });

    if(cookieData.indexOf('exCookie=done') < 0){
        $(popup).fadeIn(0);
        $('html, body').css('overflow','hidden');
        
    }else{
        $(popup).fadeOut(0);
        $('html, body').css('overflow','visible');
    } 
});

//mSlider
$(document).ready(function(){
    var swiper = new Swiper('.mSlider .swiper-container', {
        pagination: {
            el: '.mSlider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
        },
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        loop: true,
        on: {
            init: function(){ 
                $('.progress .bar').addClass('active');
            },
            slideChangeTransitionStart: function(){ 
                $('.progress .bar').removeClass('active');
            },
            slideChangeTransitionEnd: function(){
                $('.progress .bar').addClass('active');
            },
        },
    });
});

//arrivals
$(document).ready(function(){
    var swiper = new Swiper('.arrivals .swiper-container', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        on: {
            slideChangeTransitionStart: function(){ 
                $('.arrivals .swiper-container a').removeClass('active');
            },
            slideChangeTransitionEnd: function(){
                $('.arrivals .swiper-container a').addClass('active');
            },
        },
    });
});

//product
$(document).ready(function(){
    var btn = '.product .tabBox .btn'; 
    var content = '.product .conWrap'; 

    $(btn).find('li:first a').addClass('active');
    $(content).find('> div:first').fadeIn(0);


    var swiper1 = new Swiper('.product .pen', {
        navigation: { 
            nextEl: '.product .swiper-button-next',
            prevEl: '.product .swiper-button-prev',
        },
        loop: true,
        slidesPerView: 6, 
        spaceBetween: 20, 
        pagination: {
            el: '.product .swiper-pagination',
            clickable: true,
            type: 'progressbar',
        },
        breakpoints: { 
            320 : {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            767 : {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1023: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1920: {
                slidesPerView: 6,
                spaceBetween: 20,
            },
        },
    });
    var swiper2 = '';
    var swiper3 = '';
    var swiper4 = '';

    $(btn).find('a').click(function(e){
        e.preventDefault(); 
        
        $(btn).find('a').removeClass('active'); 
        $(this).addClass('active'); 

        var index = $(this).parent().index();

        $(content).find('> div').fadeOut(0);
        $(content).find('> div').eq(index).fadeIn(0);

        swiper1 = '';
        swiper2 = '';
        swiper3 = '';
        swiper4 = '';

        if(index + 1 == 1){
            swiper1 = new Swiper('.product .pen', {
                navigation: { 
                    nextEl: '.product .swiper-button-next',
                    prevEl: '.product .swiper-button-prev',
                },
                loop: true,
                slidesPerView: 6, 
                spaceBetween: 20, 
                pagination: {
                    el: '.product .swiper-pagination',
                    clickable: true,
                    type: 'progressbar',
                },
                breakpoints: { 
                    320 : {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    767 : {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1023: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1920: {
                        slidesPerView: 6,
                        spaceBetween: 20,
                    },
                },
            });
        }else if(index + 1 == 2){
            swiper2 = new Swiper('.product .marker', {
                navigation: { 
                    nextEl: '.product .swiper-button-next',
                    prevEl: '.product .swiper-button-prev',
                },
                loop: true,
                slidesPerView: 6, 
                spaceBetween: 20, 
                pagination: {
                    el: '.product .swiper-pagination',
                    clickable: true,
                    type: 'progressbar',
                },
                breakpoints: { 
                    320 : {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    767 : {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1023: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1920: {
                        slidesPerView: 6,
                        spaceBetween: 20,
                    },
                },
            });
        }else if(index + 1 == 3){
            swiper3 = new Swiper('.product .highlighter', {
                navigation: { 
                    nextEl: '.product .swiper-button-next',
                    prevEl: '.product .swiper-button-prev',
                },
                loop: true,
                slidesPerView: 6, 
                spaceBetween: 20, 
                pagination: {
                    el: '.product .swiper-pagination',
                    clickable: true,
                    type: 'progressbar',
                },
                breakpoints: { 
                    320 : {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    767 : {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1023: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1920: {
                        slidesPerView: 6,
                        spaceBetween: 20,
                    },
                },
            });
        }else if(index + 1 == 4){
            swiper4 = new Swiper('.product .art', {
                navigation: { 
                    nextEl: '.product .swiper-button-next',
                    prevEl: '.product .swiper-button-prev',
                },
                loop: true,
                slidesPerView: 6, 
                spaceBetween: 20, 
                pagination: {
                    el: '.product .swiper-pagination',
                    clickable: true,
                    type: 'progressbar',
                },
                breakpoints: { 
                    320 : {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    767 : {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1023: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1920: {
                        slidesPerView: 6,
                        spaceBetween: 20,
                    },
                },
            });
         
        }    
    });
    
}); 


//news
$(document).ready(function(){
    var textArea = '.news .textArea';
    
    var swiper = new Swiper('.news .swiper-container', {
        loop: true,
        slidesPerView: 'auto', 
        spaceBetween: 170, 
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        centeredSlides: true,
        1023: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    });
});
