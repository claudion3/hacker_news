import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getTopStoriesReducer } from './reducers/topStoriesReducers';
const reducer = combineReducers({
	topStories: getTopStoriesReducer,
});
const middleware = [thunk];

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
