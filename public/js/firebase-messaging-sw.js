/*
Give the service worker access to Firebase Messaging.
Note that you can only use Firebase Messaging here, other Firebase libraries are not available in the service worker.
*/
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js');
   
/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
* New configuration for app@pulseservice.com
*/
firebase.initializeApp({
        // apiKey: "XXXX",
        // authDomain: "XXXX.firebaseapp.com",
        // databaseURL: "https://XXXX.firebaseio.com",
        // projectId: "XXXX",
        // storageBucket: "XXXX",
        // messagingSenderId: "XXXX",
        // appId: "XXXX",
        // measurementId: "XXX"
        apiKey: "AIzaSyCyRDa5x64fRqL0I-nMofQuo5VQFplCo5w",
        authDomain: "mga-ntf.firebaseapp.com",
        projectId: "mga-ntf",
        storageBucket: "mga-ntf.appspot.com",
        messagingSenderId: "629738570772",
        appId: "1:629738570772:web:cd51c6e9f96793cfc4d301",
        measurementId: "G-H4SF2BWWR9"
    });
  
/*
Retrieve an instance of Firebase Messaging so that it can handle background messages.
*/
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload,
    );
    /* Customize notification here */
    const notificationTitle = "Background Message Title";
    const notificationOptions = {
        body: "Background Message body.",
        icon: "/itwonders-web-logo.png",
    };
  
    return self.registration.showNotification(
        notificationTitle,
        notificationOptions,
    );
});