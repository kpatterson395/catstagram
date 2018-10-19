import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CatGallery from './CatGallery';
import CommentPage from './CommentPage';
import firebase from '../firebase/firebase';
import { getPhotosThunk } from '../actions/photoActions';

class Main extends React.Component {


	componentWillMount(){
		this.props.getPhotosThunk();
	}

	fetchPictures = () => {
	    const req = new Request("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=81672ba80cd431d83764c988668a4b8a&tags=baby+goats&format=json&nojsoncallback=1", {
	      method: 'GET',
	      cache: 'default'
	    });

	    fetch(req).then(response =>{
	      return response.json();
	    }).then(data => {
	    	data.photos.photo.forEach((obj) => obj.likes = 0)
	    	firebase.database().ref().push(data.photos.photo.slice(0,30))
	    	firebase.database().ref().on('value', (snapshot) => {
			  console.log(snapshot.val());
			});
	    	this.props.loadPhotos(data.photos.photo.slice(0,30))
	    }).catch(err => {
	      console.log("ERROR: " + err);
	    })
  	}

  	render(){
		return (
			<Switch>
				<Route exact path='/' component={CatGallery} />
				<Route path='/comment/:id' component={CommentPage} />
			</Switch>
		)  		
  	}

}

const mapStateToProps = state => ({
	photos: state.photos,
	likes: state.likes
})


const mapDispatchToProps = (dispatch) => {
	return {
		
		getPhotosThunk: () => dispatch(getPhotosThunk())
	}
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
