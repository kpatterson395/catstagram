import firebase from 'firebase/app';

const config = {
	apiKey: "AIzaSyC1pXkfAHwabGn-2zwPgt0Q31SN3DlGpQo",
	authDomain: "catsagram-b77b3.firebaseapp.com",
	databaseURL: "https://catsagram-b77b3.firebaseio.com",
	projectId: "catsagram-b77b3",
	storageBucket: "catsagram-b77b3.appspot.com",
	messagingSenderId: "1029156916968"
};



firebase.initializeApp(config);

export default firebase;