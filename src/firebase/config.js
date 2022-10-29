import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCFEN5UQQvvwDLeUmmHeolsp6IwOBohJns",
  authDomain: "chavederodav2.firebaseapp.com",
  projectId: "chavederodav2",
  storageBucket: "chavederodav2.appspot.com",
  messagingSenderId: "771815667045",
  appId: "1:771815667045:web:65f2f709faedacca949d8c"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
