export interface IAppClassicButtonProps {
	buttonId?: string;
	type?: 'submit' | 'button' | 'reset';
	name?: string;
	isDisabled?: boolean;
	label?: string | React.ReactNode;
	style?: { [key: string]: string | number };
	buttonStyle?: 'fill' | 'outline';
	onClick?: () => void;
}
