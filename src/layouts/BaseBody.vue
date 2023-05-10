<template>
	<v-main>
		<v-container>
			<router-view />
			<!-- 무한스크롤 리스트 상품 조회시 사용되는 loading -->
		</v-container>
	</v-main>
</template>

<script>
	export default {
		name: 'BaseBody',
		components: {},
	};
</script>
