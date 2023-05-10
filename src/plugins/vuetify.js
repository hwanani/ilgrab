import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import colors from 'vuetify/lib/util/colors';
import { en, ko } from 'vuetify/es5/locale';

import '@/assets/scss/_index.scss';

Vue.use(Vuetify);

const theme = {
	primary: colors.deepOrange,
};

export default new Vuetify({
	lang: {
		locales: { ko, en },
		//current: 'ko'
	},
	breakpoint: {
		mobileBreakpoint: '1200',
	},
	theme: {
		themes: {
			dark: theme,
			light: {
				theme,
				primary: '#FD7B54',
				accent: '#FD7B54',
			},
		},
	},
	icons: {
		iconfont: 'mdi',
	},
});
