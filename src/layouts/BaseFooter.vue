<template lang="">
	<v-footer>
		<v-row justify="center" no-gutters>
			<div class="btn-wrap">
				<v-btn text rounded> 서비스 소개 </v-btn>
				<v-btn text rounded> 꿀캐시 소개 </v-btn>
			</div>
			<v-col class="lighten-2 pt-2 pb-5 text-center" cols="12">
				<a>
					<span class="c-dgrey">(주) 한국이컴</span>
					<v-icon v-if="toggle" right class="mb-1"> mdi-chevron-down </v-icon>
					<v-icon v-if="!toggle" right class="mb-1"> mdi-chevron-up </v-icon>
				</a>
			</v-col>
			<p>COPYRIGHT @ KECOM CORP. ALL RIGHT RESERVED</p>
		</v-row>
	</v-footer>
</template>
<script>
	export default {
		name: 'BaseFooter',
		components: {},
		props: {
			root: {
				type: String,
				default: '',
			},
		},
		data() {
			return {
				dialog: false,
				dialogType: '',
				toggle: true,
				isiPhone: /iPhone|iPad|iPod/i.test(navigator.userAgent),
			};
		},
		computed: {
			isApp() {
				return this.$CORDOVA_PLUGINS.isApp.check('contacts');
			},
			isRootAu() {
				return this.root === 'au';
			},
		},
		methods: {
			introService($name) {
				if (this.isApp && this.isiPhone) {
					this.$CORDOVA_PLUGINS.inAppBrowser.openBrowser(
						`${this.$PATH}etc/${$name}`,
						'_system',
					);
				} else {
					this.$router.push({
						name: $name === 'event-page' ? 'EventPage' : 'EventPage3',
					});
				}
			},
			openDialog(type) {
				this.dialogType = type;
				this.dialog = true;
			},
		},
	};
</script>
<style scoped>
	.custom-footer {
		bottom: 0 !important;
	}
</style>
