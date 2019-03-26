/* ====================================================
 * Popup jQuery JS
 * Copyright 2019, WyFly Team, http://wifly.by/
 * Author: Denis Dryk
 * ====================================================
 */
jQuery(document).ready(function($){

    $('a#popup').on('click', function(){
        $('.popup').fadeIn(0).addClass('show');
        $('html').css('overflow', 'hidden');
    });
    $('.popup-close').on('click', function(){
        $('.popup').fadeOut(500).removeClass('show');
        $('html').removeAttr('style');
//        $input.removeAttr('checked');
    });
    // Close popup after click not at popup div
    $(document).mouseup(function(e) {
        e.preventDefault();
        if (!$('.popup-container').is(e.target) && $('.popup-container').has(e.target).length === 0) {
            $('.popup').fadeOut(500).removeClass('show');
            $('html').removeAttr('style');
//            $input.removeAttr('checked');
        }
    });

    /*
    var $card = $('#tariffs .card-content', this);
    var $popup = $('.popup-tariff', this);
    var $a = $($card.find('a'));
    var $input = $($popup.find('input'));

    console.log($card);
    console.log($popup);
    console.log($a);
    console.log($input);

    var $inputId1 = $input.eq(0).attr('id');
    var $inputId2 = $input.eq(1).attr('id');
    var $inputId3 = $input.eq(2).attr('id');
    console.log($inputId1);
    console.log($inputId2);
    console.log($inputId3);

    $a.eq(0).attr('id', $inputId1);
    $a.eq(1).attr('id', $inputId2);
    $a.eq(2).attr('id', $inputId3);
    console.log($a);

    $a.click(function(){
        $input.eq($(this).index()).attr('checked', '');
    });
    */

});