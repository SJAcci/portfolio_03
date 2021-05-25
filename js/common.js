//gnb
$(document).ready(function(){
    var subBg = $('<div class="subBg"></div>');

    $('header').append(subBg);
    
    var gnb = '.gnb';
    var main = '.gnb .mainNav';
    var sub = '.gnb .subNav' ;
    var bg = 'header .subBg' ;
    var speed = 'fast';
    
    $(gnb).hover(function(){
        $(sub + ',' + bg).stop().slideDown(speed);
        $(main).removeClass('active');
    },function(){
        $(sub + ',' + bg).stop().slideUp(speed);
        $(main).removeClass('active');
    });
    
    
    $(main).first().focus(function(){ 
        $(sub + ',' + bg).stop().slideDown(speed);
        $(this).addClass('active');
    });

    $(main).focus(function(){
        $(main).removeClass('active'); 
        $(this).addClass('active'); 
    });
    
    $(main).first().keydown(function(e){
        if(e.keyCode == 9){
            if(e.shiftKey){ 
                $(sub + ', ' + bg).stop().slideUp(speed);
                $(this).removeClass('active');
            }
        }
    });

    $(sub).last().find('li:last a').keydown(function(e){
       if(e.keyCode == 9){ //tab키를 눌렀을 때
           if(!e.shiftKey){ //shift키는 누르지 않았을 때
               $(sub + ',' + bg).stop().slideUp(speed);
               $(main).removeClass('active');
           }
       }
    });
    
    $(sub).find('li:last a').focus(function(){
        $(main).removeClass('active');
        $(this).parents(sub).prev().addClass('acitve');
    });

    $('header').mouseleave(function(){
        $(main).removeClass('active');
        $(sub).stop().slideUp(speed);
    });
    
    var btn = '.tNav .btn';
    
    $(btn).click(function(e){
        e.preventDefault();
        $(sub + ',' + bg).stop().slideToggle(speed);
        $(main).toggleClass('active');
        $(gnb).toggleClass('active');
    });
});

//panel
$(document).ready(function(){
    var pBtn = '.tNav .btn';
    var panel = '.panel';
    var mainNav = '.pGnb .mainNav';
    var subNav = '.pGnb .subNav';
    
    $(pBtn).click(function(e){
        e.preventDefault();
        
        $(panel + ', html, body').toggleClass('active');
        $(this).toggleClass('active');
    });
    
    $(mainNav).click(function(){
        var is = $(this).next().is(':hidden');
        
        if(is){ 
            $(subNav).stop().slideUp('0.6s'); 
            $(this).next().stop().slideDown('0.6s'); 
            $(mainNav).removeClass('active'); 
            $(this).addClass('active'); 
        }else{ 
            $(this).next().stop().slideUp('0.6s'); 
            $(this).removeClass('active'); 
        }
    });
});


//family site
$(document).ready(function(){
    var btn = '.familySite button';
    var icon = '.icon';
    var speed = '0.5s'; 
    var active = 'active'; 
    var cnt = 0; 
    
    $(btn).next().find('a').fadeOut(0); 

    $(btn).click(function(){
        if(cnt == 0){ 
            $(this).next().find('a').stop().fadeIn(0);
            $(this).next().stop().animate({
                top: 0 
            },speed);
            
            cnt = 1;
        }else{ 
            $(this).next().stop().animate({
                top: 250
            },speed,function(){
                $(this).find('a').fadeOut(0);
            });
            
            cnt = 0;
        }
        
        $(this).find(icon).toggleClass(active);
        
    });

    $(btn).parent().mouseleave(function(){
        $(this).find('ul').animate({
            top: 250
        },speed,function(){
           $(this).find('a').fadeOut(0); 
        });
        
        $(this).find(icon).removeClass(active);
        cnt = 0;
    });
    
    $(btn).next().find('li:last a').keydown(function(e){
        if(e.keyCode == 9){
            if(!e.shiftKey){
                $(btn).parent().trigger('mouseleave');
            }
        }
        
    });

    $(btn).keydown(function(e){
        if(e.keyCode == 9){
            if(e.shiftKey){
                $(this).parent().trigger('mouseleave');
            }
        }
    });
});

//scroll
$(document).ready(function(){
    var btn = '.scroll';
    var speed = 2000; 
    var easing = 'easeOutQuart';

    $(btn).click(function(e){
        e.preventDefault(); 
    
        $('html, body').animate({
            scrollTop: 0 
        },speed,easing);
    });
});