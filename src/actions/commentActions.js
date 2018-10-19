
import firebase from '../firebase/firebase';
import {getPhotosThunk} from './photoActions';

export const addComments = (comment, index) => ({
	type: 'ADD_COMMENTS',
	comment,
	index
})

export const firstComment = (comment, index) => ({
	type: 'ADD_FIRST_COMMENT',
	comment, 
	index
})


function commentLength(ref, comment, index){
	let count = 0;
	return dispatch => {
	ref.once('value', snap => {
		snap.forEach(data => {
		  	count++
		})
	}).then(() => { 
		if (count > 1) {
 			dispatch(addComments(comment, index)) 
 		}
 		else {
 			dispatch(firstComment(comment, index))
 		}

	})		
	}


}


export function addCommentsThunk(comment, index){
	return dispatch => {
		var ref = firebase.database().ref('-LP22mLuUGROB_azIz47/'+index+'/comments');
		ref.push(comment)
		.then(() => dispatch(commentLength(ref, comment, index)))

		
	}
}


export function getCommentsThunk(index){
	return dispatch => {
	const comments = [];
		firebase.database().ref('-LP22mLuUGROB_azIz47/'+index+'/comments').once('value', snap => {
			snap.forEach(data => {
		  	let comment = data.val();
		  	comments.push(comment)
		  })
			console.log(comments)
		 })
		 .then(() => dispatch(loadComments(comments)))

	}
}


export const loadComments = (comments) => ({
	type: 'LOAD_COMMENTS', 
	comments 
})





