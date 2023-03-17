import { userThunks } from '@/entities';
import { sharedInterfaces, sharedTypes, template } from '@/shared';

export const userPopupData: (
	dispatch: sharedTypes.TDispatch
) => sharedInterfaces.IPopupData = dispatch => {
	return {
		title: 'Заполните профиль',
		condition: true,
		button: 'Изменить',
		onSubmit: data => {
			dispatch(userThunks.updateUserThunk(data.userName, data.photoURL));
		},
		formData: template.userFormData,
	};
};
