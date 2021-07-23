import moment from 'moment';
import Config from 'react-native-config';

let api = Config.API || '';

export const serverUrl = api;

api = 'https://jsonplaceholder.typicode.com';

export function createRequest(
	url: string,
	method: string,
	body?: object,
	headers: object = {},
	signal?: AbortSignal,
) {
	const options: RequestInit = {
		method,
		headers: {
			'content-type': 'application/json',
			timezone: moment().format('Z'),
			...headers,
		},
		body: undefined,
		signal,
	};

	if (body) options.body = JSON.stringify(body);

	return fetch(api + url, options);
}

export function sendPost(
	url: string,
	body: object = null,
	headers: object = null,
	signal?: AbortSignal,
) {
	return createRequest(url, 'POST', body, headers, signal);
}

export function sendPostFile(
	url: string,
	file: any,
	headers?: object,
	signal?: AbortSignal,
) {
	const formData = new FormData();

	formData.append('file', file);

	const options = {
		method: 'POST',
		body: formData,
		// If you add this, upload won't work
		headers: {
			// 'Content-Type': 'multipart/form-data',
			...headers,
		},
		signal,
	};

	return fetch(api + url, options);
}

export function sendPut(
	url: string,
	body?: object,
	headers?: object,
	signal?: AbortSignal,
) {
	return createRequest(url, 'PUT', body, headers, signal);
}

export function sendGet(url: string, headers?: object, signal?: AbortSignal) {
	return createRequest(url, 'GET', null, headers, signal);
}

export function sendDelete(
	url: string,
	headers?: object,
	signal?: AbortSignal,
) {
	return createRequest(url, 'DELETE', null, headers, signal);
}
