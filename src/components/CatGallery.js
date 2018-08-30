import React from 'react'


export default class CatGallery extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data: null
		}
	}
	componentWillMount(){
		this.fetchPictures();
	}

	fetchPictures = () =>{
	    const req = new Request("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=81672ba80cd431d83764c988668a4b8a&tags=kittens&format=json&nojsoncallback=1", {
	      method: 'GET',
	      cache: 'default'
	    });

	    fetch(req).then(response =>{
	      return response.json();
	    }).then(data =>{
	    	console.log(data.photos)
	      this.setState({
	      	data: data.photos.photo.slice(0,30)});
	    }).catch(err => {
	      console.log("ERROR: " + err);
	    })
  }
	render(){
		return (
			<div>
				{this.state.data===null ? <p>loading...</p> : 
					<div>{this.state.data.map((val) => {
						return (
								<img src={`https://farm${val.farm}.staticflickr.com/${val.server}/${val.id}_${val.secret}.jpg`} />
				
							)
					})}</div>}
			</div>
		)
	}
}