import './Header.css';

import React from 'react';

import { AppLogo } from '@/shared';

export const Header: React.FC = () => {
	return (
		<header className='header app__section'>
			<AppLogo fill='var(--app-light-active)' />
		</header>
	);
};
