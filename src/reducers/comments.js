const comments = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_COMMENTS':
			return (
					{
						...state,
						[action.index]: [...state[action.index], action.comment]
					}
			)
		case 'ADD_FIRST_COMMENT':
			return (
				{
						...state,
						[action.index]: [action.comment]
				}
			)
		case 'LOAD_COMMENTS':
			return (
				action.comments
			)
				

	}
	return state;
};


export default comments;