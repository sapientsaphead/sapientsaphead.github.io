$.backstretch("images/welcome.jpg");


$('#twitter').on('click', function() {
  ga('send', 'event', 'twitter', 'click', 'social-buttons');
});

$('#facebook').on('click', function() {
  ga('send', 'event', 'facebook', 'click', 'social-buttons');
});

$('#pinterest').on('click', function() {
  ga('send', 'event', 'pinterest', 'click', 'social-buttons');
});

$('#github').on('click', function() {
  ga('send', 'event', 'github', 'click', 'social-buttons');
});

$('#linkedin').on('click', function() {
  ga('send', 'event', 'linkedin', 'click', 'social-buttons');
});