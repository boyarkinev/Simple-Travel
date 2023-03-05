import { IUserData } from '@/shared/ts/interfaces';

export interface IUserProps {
	user: IUserData;
	onEdit: () => void;
}
