/**
 * Created by Administrator on 2017/9/21.
 */
$(function () {
    var $adDiv = $('.ad>div');
    var $bottomDiv = $('.bottom>div');
    var run = function () {
        var $activeItem = $('.bottom>div.active');
        var activeIndex = parseInt($activeItem.attr('value'));
        $activeItem.removeClass('active');
        if (activeIndex == $bottomDiv.length - 1) {
            $bottomDiv[0].className = 'active';
            $adDiv[$bottomDiv.length - 1].className = 'outLeft';
            $adDiv[0].className = 'inRight';
        } else {
            $bottomDiv[activeIndex + 1].className = 'active';
            $adDiv[activeIndex].className = 'outLeft';
            $adDiv[activeIndex + 1].className = 'inRight';
        }
    };
    var s = window.setInterval(run, 2000);
    $bottomDiv.bind('mouseover', function () {
        window.clearInterval(s);
        var $activeItem = $('.bottom>div.active');
        var activeIndex = $activeItem.attr('value');
        var index = $(this).attr('value');
        if (activeIndex == index) {
            return;
        }
        $(this).addClass('active');
        $activeItem.removeClass('active');
        if (activeIndex < index) {
            $adDiv[activeIndex].className = 'outLeft';
            $adDiv[index].className = 'inRight';
        } else {
            $adDiv[activeIndex].className = 'outRight';
            $adDiv[index].className = 'inLeft';
        }
    }).bind('mouseout', function () {
        s = window.setInterval(run, 2000);
    });

});