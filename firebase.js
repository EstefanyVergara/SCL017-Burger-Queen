import firebase from "firebase/app";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAG09lDMYwNcQoXc2qHZIP09CV8I0UIXWE",
    authDomain: "burgirspace.firebaseapp.com",
    projectId: "burgirspace",
    storageBucket: "burgirspace.appspot.com",
    messagingSenderId: "624692355412",
    appId: "1:624692355412:web:3d84081729afa80e98e8c1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase};

const db = firebase.firestore();


export function addMesero() {
    db.collection('Orden').add({
        mesero: 'Camila'
      });
}