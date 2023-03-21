import { userInterfaces } from '@/entities';

export interface IUserProps {
	user: userInterfaces.IUserData;
	onEdit: () => void;
}
