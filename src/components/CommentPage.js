import React from 'react';
import { connect } from 'react-redux';
import { addComments, firstComment, addCommentsThunk, getCommentsThunk} from '../actions/commentActions';
import { getPhotosThunk } from '../actions/photoActions';
import firebase from '../firebase/firebase';



class CommentPage extends React.Component{
	constructor(props){
		super(props)
	}
	componentWillMount(){
		this.props.getCommentsThunk(this.props.match.params.id);
		this.props.getPhotosThunk(this.props.match.params.id);
	}
	handleSubmit(e){
		e.preventDefault();
		let newComm = this.refs.comment.value;
		this.props.addCommentsThunk(newComm, this.props.match.params.id)
		this.refs.comment.value = "";
		window.location.reload();
		console.log(this.props.comments)

	}


	render(){
		let comment_id = this.props.match.params.id;
		let currPhoto = this.props.photos[0][comment_id]
		return (

			<div className="commentPage">
				
			
				<div key={currPhoto.id}>
					<img src={`https://farm${currPhoto.farm}.staticflickr.com/${currPhoto.server}/${currPhoto.id}_${currPhoto.secret}.jpg`} />	
					<h3 className="img-title">{currPhoto.title}</h3>
				</div>

				<div className="comment-text"> {this.props.comments? this.props.comments.map((val, i) => (<p key={i}>{val}</p>)) :
				<p className="placeholder">no comments...yet</p>}
				</div>
				<hr />
				<form className="comment-form" onSubmit={(e) =>{this.handleSubmit(e)}}>
					<input className="comment-form__text" type="text" ref="comment" placeholder="add your comment..."></input>
					<input className="comment-form__submit" type="submit"></input>
				</form>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	comments: state.comments,
	photos: state.photos
})



const mapDispatchToProps = (dispatch) => {
	return {
		addComments: (comment, index) => dispatch(addComments(comment, index)),
		firstComment: (comment, index) => dispatch(firstComment(comment, index)),
		addCommentsThunk: (comment, index) => dispatch(addCommentsThunk(comment, index)),
		getPhotosThunk: () => dispatch(getPhotosThunk()),
		getCommentsThunk: (index) => dispatch(getCommentsThunk(index))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(CommentPage)


