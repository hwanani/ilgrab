<template>
	<v-app-bar color="white" class="default-app-bar" app>
		<div class="d-flex align-center">
			<v-img
				alt="기프티콘, 모바일상품권, 모바일쿠폰, 모바일교환권, 모바일금액권, 문자, 대량발송, 쿠폰"
				class="shrink mr-2 pointer"
				contain
				src="@/assets/logo.png"
				transition="scale-transition"
				width="35"
			/>
		</div>
	</v-app-bar>
</template>
<script>
	export default {
		name: 'BaseHeader',
		data() {
			return {};
		},
		computed: {
			setParams() {
				return {};
			},
		},
		methods: {},
	};
</script>
