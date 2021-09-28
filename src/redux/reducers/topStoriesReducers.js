import * as actionTypes from '../constants/newsConstants';

export const getTopStoriesReducer = (state = { topStories: [] }, action) => {
	switch (action.type) {
		case actionTypes.GET_TOP_STORIES_REQUEST:
			return {
				loading: true,
			};
		case actionTypes.GET_TOP_STORIES_SUCCESS:
			return {
				topStories: action.payload,
				loading: false,
			};
		case actionTypes.GET_TOP_STORIES_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
