<template lang="">
	<v-footer>
		<v-row justify="center" no-gutters>
			<div>
				<v-btn text rounded> 서비스 소개 </v-btn>
				<v-btn text rounded> 꿀캐시 소개 </v-btn>
			</div>
			<v-col cols="12">
				<a>
					<span class="c-dgrey">(주) 한국이컴</span>
					<v-icon> mdi-chevron-down </v-icon>
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
		data() {
			return {};
		},
		computed: {},
		methods: {},
	};
</script>
