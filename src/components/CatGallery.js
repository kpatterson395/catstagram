import React from 'react'
import { connect } from 'react-redux';


const mapStateToProps = state => ({
	photos: state.photos,
	likes: state.likes
})

const mapDispatchToProps = dispatch => ({
	loadPhotos : (photos) =>
		dispatch({ type: 'LOAD_PHOTOS', photos }),
	addLikes : (index) => 
		dispatch({ type: 'ADD_LIKES', index})

})

class CatGallery extends React.Component{
	constructor(props){
		super(props);
	}
	componentWillMount(){
		this.fetchPictures();
	}

	fetchPictures = () =>{
	    const req = new Request("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=81672ba80cd431d83764c988668a4b8a&tags=baby+goats&format=json&nojsoncallback=1", {
	      method: 'GET',
	      cache: 'default'
	    });

	    fetch(req).then(response =>{
	      return response.json();
	    }).then(data =>{
	    	console.log(data.photos)
	    	this.props.loadPhotos(data.photos.photo.slice(0,30))
	    }).catch(err => {
	      console.log("ERROR: " + err);
	    })
  	}
  	
  	handleLikes(index){
  		console.log(index)
  		this.props.addLikes(index)
  	}

  	render(){
		return (
			<div>
				{this.props.photos.length===0 ? <p>loading...</p> : 
					<div className="cat-gallery">{this.props.photos.map((val, index) => {
						return (
								<div key={val.id}className="cat-img">
									<img src={`https://farm${val.farm}.staticflickr.com/${val.server}/${val.id}_${val.secret}.jpg`} />
									<button onClick={ (index) => this.handleLikes(index)} >Like</button>
									<button>Comment</button>
								</div>
							)
					})}</div>}
			</div>
		)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(CatGallery)
