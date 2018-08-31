const likes = (state = [], action) => {
	switch (action.type) {

		case 'ADD_LIKES':
			return [...state, action.index]
			

	}
	return state;
};

export default likes;


