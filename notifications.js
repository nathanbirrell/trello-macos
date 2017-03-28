// require('./vendor/jquery-1.7.1')
// require('./vendor/trello-client?key=abcc9de67a874de39451f9f0de83b029')
const notifier = require('node-notifier');

let notifications;

var authenticationSuccess = function() {
  console.log('Successful authentication');
};
var authenticationFailure = function() {
  console.log('Failed authentication');
};

Trello.authorize({
  type: 'popup',
  name: 'Trello for macOS',
  scope: {
    read: 'true'
  },
  expiration: 'never',
  success: authenticationSuccess,
  error: authenticationFailure
});

var showNotification = function() {
  let notification = notifications[0]

  console.log('notification', notification)
}

notifications = Trello.get('/members/me/notifications', {}, showNotification)

// Object
notifier.notify({
  'title': 'My notification',
  'message': 'Hello, there!',
  // icon: path.join(__dirname, 'coulson.jpg'),
  wait: true,
  sound: true
});

notifier.on('click', function (notifierObject, options) {
  // Triggers if `wait: true` and user clicks notification
  alert("Clicked");
});
