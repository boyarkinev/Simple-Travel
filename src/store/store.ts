import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers/reducers';
// import logger from 'redux-logger';
import {watchPlacesLoadData} from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, compose(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchPlacesLoadData);

export default store;
