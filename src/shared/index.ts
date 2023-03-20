// API
export { instanceAxios } from './api/instance-axios';

// Компоненты
export { AppCloseButton } from './components/AppCloseButton/AppCloseButton';
export { AppClassicButton } from './components/AppClassicButton/AppClassicButton';
export { AppLikePreloader } from './components/AppLikePreloader/AppLikePreloader';
export { AppPreloader } from './components/AppPreloader/AppPreloader';
export { AppLikeIcon } from './components/AppLikeIcon/AppLikeIcon';
export { AppLogo } from './components/AppLogo/AppLogo';
export { AppModal } from './components/AppModal/AppModal';
export { AppInput } from './components/AppInput/AppInput';
export { AppAlert } from './components/AppAlert/AppAlert';
export { AppIconButton } from './components/AppIconButton/AppIconButton';
export { AppImage } from './components/AppImage/AppImage';
export { AppCheckBox } from './components/AppCheckBox/AppCheckBox';

// Константы
export { VALIDATION_REGEX } from './constants/VALIDATION_REGEX';
export { ERROR_MESSAGES } from './constants/ERROR_MESSAGES';

// Типизация
export * as sharedInterfaces from './ts/interfaces';
export * as sharedTypes from './ts/types';

// Хранилище
export * as sharedActions from './store/actions/actions';
export * as sharedReducers from './store/reducers/reducers';
export * as sharedSelectors from './store/selectors/selectors';

// Шаблоны
export * as template from './templates/templates';
