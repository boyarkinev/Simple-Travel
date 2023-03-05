declare module '*.jpg';
declare module '*.png';
declare module '*.ico';
declare module '*.less';
declare module '*.svg';

declare module 'RootTypes' {
	type RootReducerType = typeof import('./store/rootReducer').default;
	type AppStateType = ReturnType<RootReducerType>;
}
