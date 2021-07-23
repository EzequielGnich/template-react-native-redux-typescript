import * as api from '../../../services/api';

export const ACTION_NAME = '[ALBUMS] ACTION_NAME';
export const ACTION_NAME_SUCCESS = '[ALBUMS] ACTION_NAME_SUCCESS';
export const ACTION_NAME_FAILED = '[ALBUMS] ACTION_NAME_FAILED';

export const SET_VALUE = '[ALBUMS] SET_VALUE';
export const CLEAR_VALUES = '[ALBUMS] CLEAR_VALUES';

export function setValue(payload) {
	return dispatch => {
		dispatch({ type: SET_VALUE, payload });
	};
}

export function clearValues(payload: boolean = false) {
	return { type: CLEAR_VALUES, payload };
}

export function action(callback?: Function) {
	return async (dispatch, getState) => {
		dispatch({
			type: ACTION_NAME,
		});

		try {
			let response = await api.sendGet(`/route`, null);

			let result = await response.json();

			if (result.length) {
				dispatch({
					type: ACTION_NAME_SUCCESS,
					payload: result,
				});

				callback && callback(null, result);
			} else {
				dispatch({
					type: ACTION_NAME_FAILED,
				});
			}
		} catch (error) {
			console.log(error);

			dispatch({
				type: ACTION_NAME_FAILED,
				payload: {
					error: 'Connection error',
				},
			});

			callback && callback('Connection error');
		}
	};
}
