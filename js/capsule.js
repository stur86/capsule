$(document).ready(function() {
    $('.cc-ctrl[type=checkbox]').each(function(i, e){
      $('<label>').insertAfter(e)
                  .attr('for', $(e).attr('id'))
                  .addClass($(e).attr('class'));
    });

    $('.cc-ctrl[type=radio]').each(function(i, e){
      $('<label>').insertAfter(e)
                  .attr('for', $(e).attr('id'))
                  .addClass($(e).attr('class'));
    });
});