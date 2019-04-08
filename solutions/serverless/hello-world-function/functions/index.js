const functions = require('firebase-functions');
const { DateTime } = require('luxon');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.today = functions.https.onRequest((request, response) => {
  const date = DateTime.local();
  response.send(date.toLocaleString(DateTime.DATE_HUGE));
 });
