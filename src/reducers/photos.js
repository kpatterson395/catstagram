const photos = (state = [], action) => {
	switch (action.type) {
		case 'LOAD_PHOTOS':
			return [...action.photos]

		case 'ADD_LIKES':
			return [...state.slice(0, action.index),
					{...state[action.index],
					...state[action.index].likes++},
					...state.slice(action.index+1)
			]

	}
	return state;
};


export default photos;