import { InitialState } from './InitialState';
import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from '../Reducers';
import thunk from 'redux-thunk';

export const configureStore = (InitialState: any) => {
	const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	return createStore(rootReducer, InitialState || {}, composeEnhancers(applyMiddleware(thunk)));
};
