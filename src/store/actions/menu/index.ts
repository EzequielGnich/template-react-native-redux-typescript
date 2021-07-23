export const SET_VALUE = '[MENU] SET_VALUE';
export const CLEAR_VALUES = '[MENU] CLEAR_VALUES';

export function setValue(payload) {
	return { type: SET_VALUE, payload };
}

export function clearValues() {
	return { type: CLEAR_VALUES };
}
