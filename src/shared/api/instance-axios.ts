import axios from 'axios';

const baseURL = 'https://vmesto-project-default-rtdb.firebaseio.com';

export const instanceAxios = axios.create({
	baseURL,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
});
