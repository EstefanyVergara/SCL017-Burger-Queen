import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAG09lDMYwNcQoXc2qHZIP09CV8I0UIXWE",
    authDomain: "burgirspace.firebaseapp.com",
    projectId: "burgirspace",
    storageBucket: "burgirspace.appspot.com",
    messagingSenderId: "624692355412",
    appId: "1:624692355412:web:3d84081729afa80e98e8c1"
};


firebase.initializeApp(firebaseConfig);

export {firebase};

const db = firebase.firestore();

export function savingDataFirebase(cartItems,mesero,mesa) {
    db.collection('order').add({
        pedido: cartItems,
        mesero: mesero,
        mesa: mesa,
    });
}