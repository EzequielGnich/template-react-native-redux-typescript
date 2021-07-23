import { combineReducers } from 'redux';

import menu from './menu';

export interface State {
	menu: {};
}

const appReducer = combineReducers({
	menu,
});

const rootReducer = (state, action) => {
	return appReducer(state, action);
};

export default rootReducer;
