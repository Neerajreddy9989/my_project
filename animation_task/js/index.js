
(function($) {
    $.fn.openPopup = function(settings) {
      var elem = $(this);
   
      var settings = $.extend({
        anim:'fade'
      }, settings);
      elem.show();
      elem.find('.popup-image').addClass(settings.anim+'In');
    }
    
    $.fn.closePopup = function( settings ) {
      var elem = $(this);

      var settings = $.extend({
        anim: 'fade'
      }, settings);
      elem.find('.popup-image').removeClass(settings.anim+'In').addClass(settings.anim+'Out');
      
      setTimeout(function(){
          elem.hide();
          elem.find('.popup-image').removeClass(settings.anim+'Out')
        }, 500);
    }
      
  }(jQuery));
  

  $('.open-popup').click(function(){
    $('#'+$(this).data('id')).openPopup({
      anim: (!$(this).attr('data-animation') || $(this).data('animation') == null) ? 'fade' : $(this).data('animation')
    });
  });
  $('.close-popup').click(function(){
    $('#'+$(this).data('id')).closePopup({
      anim: (!$(this).attr('data-animation') || $(this).data('animation') == null) ? 'fade' : $(this).data('animation')
    });
  });
  

  
  