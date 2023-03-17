export const VALIDATION_REGEX = {
	SIMPLE_TEXT: /([A-Za-z]|[А-ЯЁа-яё])/gi,
	URL_TEXT: /(^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$)/,
	EMAIL: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
	PASSWORD:
		/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/,
};
