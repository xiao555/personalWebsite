$(function() {
  $('.del').click(function(e) {
    var target = $(e.target)
    var title = target.data('title')
    var tr = $('.item-title' + title)
    $.ajax({
      type: 'DELETE',
      url: '/admin/blog?title=' + title
    })
    .done(function(results) {
      if (results.success === 1) {
        if (tr.length > 0) {
          tr.remove()
        }
      }
    })
  })
})