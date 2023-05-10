import Vue from 'vue';
import VueRouter from 'vue-router';
// import store from '@/store/index';
import $HISTORY from '@/utils/history.js';
import { createComponentIndex } from '@/hoc/index.js';

Vue.use(VueRouter);
const $HISTORY_STACK = $HISTORY.historyStack;
const routes = [
	{
		path: '/',
		name: 'MainIndex',
		component: createComponentIndex(
			() => import('@/layouts/BaseHeader.vue'),
			() => import('@/layouts/BaseBody.vue'),
			() => import('@/layouts/BaseFooter.vue'),
		),
		children: [
			{
				path: 'main',
				name: 'MainPage',
				meta: { auth: false },
				component: () => import('@/views/Main.vue'),
			},
		],
	},
	{
		path: '/',
		redirect: '/home',
	},
	{
		path: '/home',
		component: () => import('@/views/Main.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: 'http://localhost:8080/',
	routes,
});

router.beforeEach((to, from) => {
	let historyObj = {};
	historyObj.name = from.name;
	historyObj.params = from.params;
	$HISTORY_STACK.push(historyObj);
	window.scrollTo(0, 0);
});

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => {
		if (err.name !== 'NavigationDuplicated') throw err;
	});
};

export default router;
