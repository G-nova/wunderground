(function($){


Drupal.behaviors.Wunderground = {
    attach: function (context, settings) {
      $("#block-wunderground-wundeground-infos").once('wunderground-ajax', function () {
        $.get('/ajax/wunderground', function(data) {
          $("#block-wundeground-wundeground-infos > .content").html(data);
        });
      });
    }
  };

}(jQuery));