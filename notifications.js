const notifier = require('node-notifier');

// var notification = new Notification('Title', {
//   body: 'Lorem Ipsum Dolor Sit Amet',
//   title:"Hello",
//   icon:'http://placehold.it/10x10',
//   // To prevent sound
//   //silent:true,
// })
//
// console.log(notification)
//
// notification.addEventListener('click', function() {
//     alert("Clicked");
// }, false)
//
// notification.addEventListener('show', function() {
//     alert("Shown");
// }, false)
//
// notification.addEventListener('error', function(error) {
//     alert("Error");
// }, false)
//
// notification.addEventListener('close', function() {
//     alert("Closed");
// }, false)

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
