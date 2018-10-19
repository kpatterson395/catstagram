
import firebase from '../firebase/firebase'

export const loadPhotos = (photos) => ({
	type: 'LOAD_PHOTOS', 
	photos 
})



export function getPhotosThunk() {
	return dispatch => {
	const photos = [];
		firebase.database().ref().once('value', snap => {
			snap.forEach(data => {
		  	let photo = data.val();
		  	photos.push(photo)
		  })
		 })
		 .then(() => dispatch(loadPhotos(photos)))
	}
}


export function addLikesThunk(index){
	return dispatch => {
			var ref = firebase.database().ref('-LP22mLuUGROB_azIz47/'+index+'/likes');
			ref.transaction(function(currentClicks) {
				  return currentClicks + 1;
			}).then(() => dispatch(getPhotosThunk()))
	}
}

export const addLikes = (index) => ({
	type: 'ADD_LIKES',
	index
})