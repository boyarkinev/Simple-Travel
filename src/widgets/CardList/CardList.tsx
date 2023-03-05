import './CardList.css';

import React from 'react';

import { Card } from '@/entities';
import { ICardData } from '@/shared/ts/interfaces';
import { ICardListProps } from './ts/propsTypes';

export const CardList: React.FC<ICardListProps> = ({ places }) => {
	return (
		<div className='places-list app__section'>
			{places.map((card: ICardData) => (
				<Card data={card} key={card.id} />
			))}
		</div>
	);
};
