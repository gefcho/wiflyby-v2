/* ====================================================
 * Slider jQuery JS
 * Copyright 2019, WyFly Team, http://wyfly.by/
 * Author: Denis Dryk
 * ====================================================
 */
jQuery(document).ready(function($){

    $('.slider').each(function(){
        var $item = $('li.item', this);
        var $nav = $('.slider-nav', this);
        $item.eq(0).addClass('active');
        $item.each(function(){
            $nav.append('<span></span>');
        });
        var $pag = $($nav.find('span'));
        $pag.eq($item.filter('.active').index()).addClass('active');
        $pag.click(function(){
            $item.eq($(this).index()).addClass('active').siblings().removeClass('active');
            $(this).addClass('active').siblings().removeClass('active');
        });
        // Changing slide by time
        var timeout = 0;
        var time = 8000;
        function interval(){
            clearTimeout(timeout);
            var index = $item.filter('.active').index();
            timeout = setTimeout(function(){
                next((index + 1) % $item.length);
            }, time);
        }        
        interval();
        function next(){
            var index = $item.filter('.active').index();
            interval();
            if(index == $item.length-1){
                index = -1;
            }
            $item.eq(index+1).addClass('active').siblings().removeClass('active');
            $pag.eq(index+1).addClass('active').siblings().removeClass('active');
        }
        // Stop changing slide by time on mousehover
        $(function(){
            var index = $item.filter('.active').index();
            $('.slider').mouseenter(function(){
                clearTimeout(timeout);
            }).mouseleave(function(){
                timeout=setTimeout(function(){
                    next((index + 1) % $item.length);
                }, time);
            });
        });
    });
    
});