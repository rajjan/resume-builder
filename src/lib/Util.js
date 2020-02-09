/* *
 * Global Util Functions

 * */


const Util = {

	validateEmail: email => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/g.test(email),

	randomNumber: (min, max) => {
    	return Math.floor(Math.random()*(max-min+1)+min);
	},

	randomId: () => {
		const currentTime = new Date().getTime();
		const randomNumber = Util.randomNumber(100, 999);
		return `${currentTime}-${randomNumber}`;
	},

	getQueryString: (url, parameter) => {
		const myParameter = parameter.replace(/[\[\]]/g, '\\$&');
		const regex = new RegExp(`[?&]${myParameter}(=([^&#]*)|&|#|$)`);
		const results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, ' '));
	},

};

/* Export ================================ */
export default Util;
