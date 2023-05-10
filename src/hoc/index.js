/* eslint-disable */
import Vue from 'vue';
import { VApp } from 'vuetify/lib';

const DefaultComponent = Vue.component('TempView', {
	template: '<div></div>',
});

const createComponentIndex =  (...childs) => {
	return Vue.component('Index', {
		data: function () {
			return {
				message: '메시지테스트',
			};
		},
		mixin: [''],
		computed: {
			isApp() {
				const isApp =
					/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
						navigator.userAgent,
					);
				return !isApp ? '720px' : '';
			},
			viewClass(){
				const {viewClass} = childs[4] ?? '';
				return viewClass;
			},
			root(){
				const {root} = childs[4] ?? '';
				return root;
			},
		},
		template: 
		`<VApp>
			<CustomAppbar />
			<CustomView />
			<CustomFooter />
		</VApp>`,
		components: {
			VApp,
			CustomAppbar: childs[0] ?? DefaultComponent,
			CustomView: childs[1] ?? DefaultComponent,
			CustomFooter: childs[2] ?? DefaultComponent,
		},
			
		mounted() {
		},
		props: {},
		methods: {
		},
	});
}


// const createComponentView = () =>{
// 	return Vue.component('SubView', {
// 		props: {},
// 		data: function () {
// 			return {};
// 		},
// 		mixin: [''],
// 		computed: {},
// 		mounted() {},
// 		methods: {},
// 		components: {
// 			//VApp,
// 		},
// 		template: 
// 		`<div>
// 			<router-view/>
// 		</div>`,
// 	});
// }

export {
	createComponentIndex,
}