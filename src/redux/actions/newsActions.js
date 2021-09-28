import axios from 'axios';
import * as actionTypes from '../constants/newsConstants';

export const getTopStories = () => async dispatch => {
	try {
		dispatch({ type: actionTypes.GET_TOP_STORIES_REQUEST });

		const { data } = await axios.get(
			'https://hacker-news.firebaseio.com/v0/topstories.json',
		);

		dispatch({
			type: actionTypes.GET_TOP_STORIES_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: actionTypes.GET_TOP_STORIES_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
