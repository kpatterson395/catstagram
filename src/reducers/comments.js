const comments = (state = {42430203411: ["this is awesome"]}, action) => {
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
				

	}
	return state;
};


export default comments;