import React from 'react';

export const AppImage: React.FC<{ [key: string]: string }> = ({
	image,
	width,
}) => {
	return <img src={image} alt='Avatar' style={{ width }} />;
};
