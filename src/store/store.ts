import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/rootReducer';
// import logger from 'redux-logger';
import {watchPlacesLoadData, watchStorageLoadData} from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchPlacesLoadData);
sagaMiddleware.run(watchStorageLoadData);

export default store;
