// firebase.js

var movemeData = new Firebase('https://movme.firebaseio.com/');
$('#messageInput').keypress(function (e) {
  if (e.keyCode == 13) {
    var username = $('#nameInput').val();
    var text = $('#messageInput').val();
    // movemeData.set('User ' + name + ' says ' + text);
    movemeData.set({username: username, text: text});

    $('#messageInput').val('');
  }
