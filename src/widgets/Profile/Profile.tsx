import './Profile.css';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { AppClassicButton } from '@/shared';
import { User, Avatar, userSelectors, userHelpers } from '@/entities';
import { IProfileProps } from './ts/propsTypes';

export const Profile: React.FC<IProfileProps> = props => {
	const { cardPopupHandler, userPopupHandler } = props;

	const user = useSelector(userSelectors.userData);

	useEffect(() => {
		userHelpers.setUserToken(user.accessToken || '');
	}, [user.accessToken]);

	const avatar = {
		image: user.photoURL,
		width: 'var(--app-avatar-size)',
		height: 'var(--app-avatar-size)',
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
							width: '70px',
							height: '70px',
							borderRadius: '50%',
						}}
						label={<i className='material-icons'>add</i>}
						onClick={cardPopupHandler}
					/>
				</div>
			</div>
		</div>
	);
};
