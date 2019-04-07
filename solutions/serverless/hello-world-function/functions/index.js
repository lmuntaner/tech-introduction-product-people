const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

const writers = ['Arturo Bandini', 'Henry Chinaski', 'Pierre Bezukhov', 'Sal Paradise'];

exports.writers = functions.https.onRequest((request, response) => {
  response.send(writers);
 });
