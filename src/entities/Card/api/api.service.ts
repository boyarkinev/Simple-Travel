import { instanceAxios } from '@/shared';

export function getCards() {
	return instanceAxios
		.get('/places.json')
		.then(res => res.data)
		.catch(err => console.error(err));
}

export function putCard(place: object) {
	return instanceAxios.post('/places.json', place).then(res => res.data);
}

export function deleteCard(place: string) {
	return instanceAxios.delete(`/places/${place}.json`);
}

export function patchLikes(place: string, likes: Array<string>) {
	return instanceAxios.patch(`/places/${place}.json`, {
		likesUsers: likes,
	});
}
