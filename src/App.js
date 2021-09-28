import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { getTopStories } from './redux/actions/newsActions';
import Card from './components/Card';

const App = () => {
	const dispatch = useDispatch();
	const topStoriesNews = useSelector(state => state.topStories);
	const { topStories, error, loading } = topStoriesNews;

	const [getRandom, setGetRandom] = useState([]);

	useEffect(() => {
		dispatch(getTopStories(topStories));
	}, []);

	useEffect(() => {
		if (topStories) {
			let newTopStories = [];
			for (let i = 10; i > 0; i--) {
				let j = Math.floor(Math.random() * topStories.length);
				let k = topStories[j];
				newTopStories.push(k);
				setGetRandom(newTopStories);
			}
		}
	}, [topStories]);

	return (
		<div className='app'>
			<Navbar />

			<div className='items'>
				{loading ? (
					<h2>loading...</h2>
				) : error ? (
					<h2>{error}</h2>
				) : (
					topStories && getRandom.map(e => <Card key={e} id={e} />)
				)}
			</div>
		</div>
	);
};

export default App;
