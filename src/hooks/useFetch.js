import useSwr from 'swr';

const Url = 'https://hacker-news.firebaseio.com/v0';

export const useFetch = (path, id) => {
	if (!path) {
		throw new Error('Missing a Path');
	}

	const url = id ? Url + path + '/' + id : Url + path;
	const { data, error, loading } = useSwr(url);

	return { data, error, loading };
};
