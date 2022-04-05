/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
    apiKey: "AIzaSyBOdKQ9xOO54vxihYIpdRmaU40dChp1RzI",

    authDomain: "friendly-chat-chris.firebaseapp.com",

    projectId: "friendly-chat-chris",

    storageBucket: "friendly-chat-chris.appspot.com",

    messagingSenderId: "906124987723",

    appId: "1:906124987723:web:91577b6bee6006ea3aacce"

};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
