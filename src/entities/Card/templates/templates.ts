import { cardThunks } from '@/entities';
import { sharedInterfaces, sharedTypes, template } from '@/shared';

export const placePopupData: (
	dispatch: sharedTypes.TDispatch,
	node: React.ReactNode
) => sharedInterfaces.IPopupData = (dispatch, node) => {
	return {
		title: 'Новое место',
		condition: true,
		button: node,
		onSubmit: data => {
			dispatch(cardThunks.putDataThunk(data.placeName, data.placeLink));
		},
		formData: template.placeFormData,
	};
};
