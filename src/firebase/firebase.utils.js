import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyB0kxhtYl5_PHVz9eQ8zoCClCzUn78JyhU",
	authDomain: "cloth-db-97873.firebaseapp.com",
	databaseURL: "https://cloth-db-97873.firebaseio.com",
	projectId: "cloth-db-97873",
	storageBucket: "cloth-db-97873.appspot.com",
	messagingSenderId: "451241081408",
	appId: "1:451241081408:web:f43b5d9f86b0deae1ffda5",
	measurementId: "G-PCEJWKVQ6J"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
