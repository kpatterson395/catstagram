

export const addComments = (comment, index) => ({
	type: 'ADD_COMMENTS',
	comment,
	index
})

export const firstComment = (comment, index) => ({
	type: 'ADD_FIRST_COMMENT',
	comment, 
	index
})