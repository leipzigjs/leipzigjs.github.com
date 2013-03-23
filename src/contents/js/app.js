$(document).ready(function() {
  // Enable tooltips
  $('a[rel="tooltip"]').tooltip({ placement: 'bottom' })

  // Open all links within articles in new tab
  $('article section a').on('click', function(e) {
    e.preventDefault();
    window.open(e.target.href, '_blank');
  })
})
