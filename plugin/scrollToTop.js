(function($) {

    $.fn.scrollToTop = function(customSettings) {

        var settings = $.extend({
        'duration': 2500,
        }, customSettings);
        
        var element = this;

        $(element).click(function(){
                $('html, body').animate({scrollTop:0}, settings.duration);
                return false;
        });
    }

})(jQuery);