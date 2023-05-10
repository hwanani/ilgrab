import router from '@/router/index.js';

let historyStack = [];
export function back() {
	let $name = historyStack[historyStack.length - 1].name;
	let $params = historyStack[historyStack.length - 1].params;
	router.push({ name: $name, params: $params });
	historyStack.splice(historyStack.length - 2, historyStack.length - 1);
}
export default { historyStack, back };
