import './Profile.css';
import React from 'react';
import { useSelector } from 'react-redux';

import { AppClassicButton } from '@/shared';
import { User, Avatar, userData } from '@/entities';
import { IProfileProps } from './ts/propsTypes';

export const Profile: React.FC<IProfileProps> = props => {
	const { cardPopupHandler, userPopupHandler } = props;

	const user = useSelector(userData);

	const avatar = {
		image: user.avatar,
		width: '150px',
		height: '150px',
	};

	return (
		<div className='profile app__section'>
			<div className='user-info'>
				<Avatar avatar={avatar} />
				<User onEdit={userPopupHandler} user={user} />
				<div className='profile-button__wrapper'>
					<AppClassicButton
						buttonId='add-card'
						type='button'
						buttonStyle='outline'
						style={{
							width: '150px',
						}}
						label={<i className='material-icons'>add</i>}
						onClick={cardPopupHandler}
					/>
				</div>
			</div>
		</div>
	);
};
