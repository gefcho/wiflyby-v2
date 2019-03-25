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
    });
    // Close popup after click not at popup div
    $(document).mouseup(function(e) {
        e.preventDefault();
        if (!$('.popup-container').is(e.target) && $('.popup-container').has(e.target).length === 0) {
            $('.popup').fadeOut(500).removeClass('show');
            $('html').removeAttr('style');
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

    var $id1 = $input.eq(0).attr('id');
    var $id2 = $input.eq(1).attr('id');
    var $id3 = $input.eq(2).attr('id');

    $a.eq(0).attr('id', $id1);
    $a.eq(1).attr('id', $id2);
    $a.eq(2).attr('id', $id3);
    console.log($a);

    $a.click(function(){
        $input.eq($(this).index()).attr('checked', 'checked').siblings().removeAttr('checked');
        $(this).attr('checked', 'checked').siblings().removeAttr('checked');
    });
    */

});