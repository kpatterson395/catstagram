import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyC1pXkfAHwabGn-2zwPgt0Q31SN3DlGpQo",
	authDomain: "catsagram-b77b3.firebaseapp.com",
	databaseURL: "https://catsagram-b77b3.firebaseio.com",
	projectId: "catsagram-b77b3",
	storageBucket: "catsagram-b77b3.appspot.com",
	messagingSenderId: "1029156916968"
};


firebase.initializeApp(config)

const database = firebase.database();


export { firebase, database as default };


// firebase.database().ref().set({
// 	name: 'Kristie Patterson'
// }).then(() => {
// 	console.log("updated")
// }).catch((error) => {
// 	console.log(error)
// })

// firebase.database().ref()
// 	.once('value')
// 	.then((snapshot) => {
// 		const val = snapshot.val();
// 		console.log(val);
// 	})
// 	.catch((e) => {
// 		console.log( 'error: ', e)
// 	})


// firebase.database().ref()
// 	.on('value', (snapshot) => {
// 		const val = snapshot.val();
// 		console.log(val);
// 	})
