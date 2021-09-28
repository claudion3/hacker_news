import React from 'react';
import { useFetch } from '../hooks/useFetch';

const User = ({ id }) => {
	const { data, error } = useFetch(`/user/${id}.json`);

	return (
		<div>
			{error ? (
				<h2>{error}</h2>
			) : !data ? (
				<></>
			) : (
				data && <p>Karma: {data.karma}</p>
			)}
		</div>
	);
};

export default User;
