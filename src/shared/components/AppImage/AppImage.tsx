import React from 'react';

export const AppImage: React.FC<IKeyString> = ({ image, width }) => {
	return <img src={image} alt='Avatar' style={{ width }} />;
};
