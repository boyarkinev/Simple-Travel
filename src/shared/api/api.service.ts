import { instanceAxios } from '@/shared';

export const apiServices = {
	getCards() {
		return instanceAxios
			.get('/places.json')
			.then(res => res.data)
			.catch(err => console.error(err));
	},

	putCard(place: object) {
		return instanceAxios.post('/places.json', place).then(res => res.data);
	},

	deleteCard(place: string) {
		return instanceAxios.delete(`/places/${place}.json`);
	},

	patchLikes(place: string, likes: Array<string>) {
		return instanceAxios.patch(`/places/${place}.json`, {
			likesUsers: likes,
		});
	},
};
