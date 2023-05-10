// const webpack = require('webpack');

module.exports = {
	transpileDependencies: ['vuetify'],
	publicPath: '/', // ANDROID = '/' IOS = '' 설정
	runtimeCompiler: true,

	//파일 이름 해싱작업
	filenameHashing: false,

	//운영 레벨에서
	productionSourceMap: false,
};
