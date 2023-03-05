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

// Константы
export { VALIDATION_REGEX } from './constants/VALIDATION_REGEX';

// Хранилище
export * as actions from './store/actions/actions';
export * as reducers from './store/reducers/reducers';
export * as selectors from './store/selectors/selectors';
export * as thunks from './store/thunks/thunks';

// Шаблоны
export * as template from './templates/place-inputs-data';
