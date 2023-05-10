<template>
	<v-app-bar color="white" class="default-app-bar">
		<div>
			<v-img
				contain
				src="@/assets/logo.png"
				transition="scale-transition"
				width="142"
			/>
		</div>
	</v-app-bar>
</template>
<script>
	export default {
		name: 'BaseHeader',
		data() {
			return {
				snackbar: false,
				dialog: false,
				notifications: false,
				sound: true,
				widgets: false,
				keyword: '',
			};
		},
		computed: {
			setParams() {
				return {};
			},
		},
		methods: {},
	};
</script>
