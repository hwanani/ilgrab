<template>
	<!-- <v-app> -->
	<v-fade-transition mode="out-in">
		<router-view />
	</v-fade-transition>
	<!-- </v-app> -->
</template>
<script>
	export default {
		name: 'App',
		mounted() {
			this.$nextTick(() => {});
		},
	};
</script>
