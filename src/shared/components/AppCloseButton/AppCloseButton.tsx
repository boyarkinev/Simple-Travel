import './AppCloseButton.css';

import React from 'react';

export const AppCloseButton: React.FC<{
	onClose: () => void;
}> = ({ onClose }) => {
	return (
		<i onClick={onClose} className='material-icons app-close-button'>
			clear
		</i>
	);
};
