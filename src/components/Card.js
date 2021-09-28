import React from 'react';
import './Card.css';
import { useFetch } from '../hooks/useFetch';
import User from './User';

const Card = ({ id }) => {
	const { data, error } = useFetch(`/item/${id}.json`);

	return (
		<div className='top-stories'>
			{error ? (
				<h2>{error}</h2>
			) : !data ? (
				<></>
			) : (
				<div className='story-item'>
					<h1 className='title'>{data.title}</h1>
					<div className='info'>
						<p>
							<strong>Link: </strong>
							<a href={data.url}>{data.url}</a>
						</p>
						<p>
							<strong>Published: </strong>
							{new Date(data.time).toLocaleDateString()}
						</p>
						<p>
							<strong>Score: </strong>
							{data.score}
						</p>
						<p>
							<strong>Author: </strong>
							{data.by}
						</p>
						<User id={data.by} />
					</div>
				</div>
			)}
		</div>
	);
};

export default Card;
