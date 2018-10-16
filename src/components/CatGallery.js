import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addLikes } from '../actions/photoActions';




class CatGallery extends React.Component{
	constructor(props){
		super(props);
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
									<button onClick={() => this.handleLikes(index)} >{val.likes}  {val.likes === 1 ? "Like" : "Likes"}</button>
									<Link className="comment-link" to={`comment/${val.id}`}>Comment</Link>
								</div>
							)
					})}</div>}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	photos: state.photos,
	likes: state.likes
})


const mapDispatchToProps = (dispatch) => {
	return {
		
		addLikes: (index) => dispatch(addLikes(index))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CatGallery)
