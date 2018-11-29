$( document ).ready(function() {

  $(".portfolio-filter li").click(function(event) {
    event.preventDefault();

    $(".portfolio-filter li").removeClass('active')
    $(this).addClass('active')

    var filter = $(this).data('filter')
    if (filter === 'all') {
      $(".projects .project").addClass('active')
    }
    else {
      $(".projects .project").removeClass('active')
      var projects = $(".projects").find("[data-category='" + filter + "']").each(function() {
        $(this).addClass('active')
      });
    }

  })

});
