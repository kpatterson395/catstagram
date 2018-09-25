import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CatGallery from './CatGallery';
import CommentPage from './CommentPage';
import database from '../firebase/firebase';


const mapStateToProps = state => ({
	photos: state.photos,
	likes: state.likes
})

const mapDispatchToProps = dispatch => ({
	loadPhotos : (photos) =>
		dispatch({ type: 'LOAD_PHOTOS', photos }),
	addLikes : (index) => 
		dispatch({ type: 'ADD_LIKES', index}),
	startLoadPhotos : (photos) =>
		dispatch(startLoadPhotos(photos))


})


// startAddExpense: (expense) => dispatch(startAddExpense(expense))

const startLoadPhotos = (photos) => {
	return (dispatch) => {
		database.ref().set(photos).then((ref) => {
			dispatch(this.props.loadPhotos(ref))
		})
	}
}

class Main extends React.Component {


	componentWillMount(){
		this.fetchPictures();
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
	    	database.ref().set(data.photos.photo.slice(0,30))
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
