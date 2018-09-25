import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
	comments: state.comments,
	photos: state.photos
})

const mapDispatchToProps = dispatch => ({
	addComments : (comment, index) => 
		dispatch({ type: 'ADD_COMMENTS', comment, index}),
	firstComment : (comment, index) => 
		dispatch({ type: 'ADD_FIRST_COMMENT', comment, index})
})



class CommentPage extends React.Component{
	constructor(props){
		super(props)
	}


	handleSubmit(e){
		e.preventDefault();
		let newComm = this.refs.comment.value;
		if(this.props.comments[this.props.match.params.id]){
			this.props.addComments(newComm, this.props.match.params.id)
		} else {
			this.props.firstComment(newComm, this.props.match.params.id)			
		}
		this.refs.comment.value = "";
		console.log(this.props.comments[this.props.match.params.id]);
	}

	render(){
		let comment_id = this.props.match.params.id;
		let currPhoto = this.props.photos.filter((val) => {return val["id"] === comment_id});	
		return (
			<div className="commentPage">
				
				{currPhoto.map((val) => 
					{return (
						<div key={val.id}>
							<img src={`https://farm${val.farm}.staticflickr.com/${val.server}/${val.id}_${val.secret}.jpg`} key={val.id}/>	
							<h3 className="img-title">{val.title}</h3>
						</div>
					)}
				)}
				<div className="comment-text"> {this.props.comments[comment_id] ? this.props.comments[comment_id].map((val, i) => (<p key={i}>{val}</p>)) :
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


export default connect(mapStateToProps, mapDispatchToProps)(CommentPage)
