<template>
	<div>
		<div class="all">
			<div class="space"></div>
			<List :list="list" v-if="list.length"></List>
		</div>
	</div>
</template>
	
<script>
	import List from './brandList';
	import axios from 'axios';
	export default {
		data(){
			return{
				list:[]
			}
		},
		beforeMount(){
			axios.get(`http://www.xiongmaoyouxuan.com/api/category/${this.$route.params.id}/items?start=0&sort=0`).then(res=>{
				this.list = res.data.data.items.list
			})
		},
		components:{
			List
		}
	}
</script>

<style scoped lang="scss">
	div.all{
		background:#f5f5f5;
		div.space{
			height:10px;
		}
	}
</style>
