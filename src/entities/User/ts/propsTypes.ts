import { sharedInterfaces } from '@/shared';

export interface IUserProps {
	user: sharedInterfaces.IUserData;
	onEdit: () => void;
}
