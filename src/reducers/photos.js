const photos = (state = [], action) => {
	switch (action.type) {
		case 'LOAD_PHOTOS':
			return [...action.photos]
			
	}
	return state;
};


export default photos;