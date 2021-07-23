import * as actions from '../../actions/menu';

let initialState = {
	showTabBar: true,
	loading: {},
	errors: {},
};

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actions.SET_VALUE:
			return {
				...state,
				...payload,
			};
		case actions.CLEAR_VALUES:
			return {
				...initialState,
			};
		default:
			return state;
	}
};

export default reducer;
