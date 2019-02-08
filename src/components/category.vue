<template>
	<div>
		<div class="all" ref="all">
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
				list:[],
				start:0,
				lazyCount:0
			}
		},
		beforeMount(){
			var self = this;
			axios.get(`http://www.xiongmaoyouxuan.com/api/category/${this.$route.params.id}/items?start=0&sort=0`).then(res=>{
				this.list = res.data.data.items.list;
				this.start += 20;
				this.lazyCount += 1;
			})
		},
		mounted(){
			window.addEventListener('scroll', this.handleScroll);
		},
		components:{
			List
		},
		methods:{
			handleScroll(){
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				if(this.$refs.all){
					if(scrollTop>this.$refs.all.clientHeight-document.documentElement.clientHeight-1000){
						if(this.start === this.lazyCount*20){
							this.lazyCount += 1;
							axios.get(`http://www.xiongmaoyouxuan.com/api/category/${this.$route.params.id}/items?start=${this.start}&sort=0`).then(res=>{
								this.list.push(...res.data.data.items.list)
								this.start += 20;
							})
						}
					}
				}
			}
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
