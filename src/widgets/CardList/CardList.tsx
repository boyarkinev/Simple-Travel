import './CardList.css';

import React from 'react';

import { Card } from '@/entities';
import { ICardListProps } from './ts/propsTypes';
import { sharedInterfaces } from '@/shared';

export const CardList: React.FC<ICardListProps> = ({ places }) => {
	return (
		<div className='places-list app__section'>
			{places.map((card: sharedInterfaces.ICardData) => (
				<Card data={card} key={card.id} />
			))}
		</div>
	);
};
