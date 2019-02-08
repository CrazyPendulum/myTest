
<template>
	<div class="tab" ref="box">
		<div class="title">
			<Title text="潮流精选" :isWhite='true'></Title>
		</div>
		<div class="kindlist">
			<div class="kind" v-for="item in kindList" :key="item.imageUrl">
					
					<router-link tag="dl" :to="'/category/'+item.url.slice(-4)">
						<dt><img :src="item.imageUrl" alt="图片显示失败"></dt>
						<dd><p>{{item.title}}</p></dd>
					</router-link>
			</div>
		</div>
		<div class="title">
			<Title text="大家都在逛" :isWhite='false'></Title>
		</div>
		<List :list="list" v-if="list.length"></List>
	</div>
</template>

<script>
	import axios from 'axios'
	import Title from './title'
	import List from './brandList'
	export default{
		data(){
			return{
				kindList:[],
				list:[],
				start:0,
				lazyCount:0
			}
		},
		beforeMount(){
			// console.log(this.$route.params.kind)
			axios.get(`http://www.xiongmaoyouxuan.com/api/tab/${this.$route.params.kind}?start=0`).then(res=>{
				// console.log(res.data)
				this.kindList = res.data.data.categories;
				this.list = res.data.data.items.list;
				this.start += 20;
				this.lazyCount += 1;
			})
		},
		mounted(){
			 window.addEventListener('scroll', this.handleScroll);
		},
		methods:{
			handleScroll(){
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				if(this.$refs.box){
					if(scrollTop>this.$refs.box.clientHeight-document.documentElement.clientHeight-1000){
						if(this.start === this.lazyCount*20){
							this.lazyCount += 1;
							axios.get(`http://www.xiongmaoyouxuan.com/api/tab/${this.$route.params.kind}/feeds?start=${this.start}&sort=0`).then(res=>{
								this.list.push(...res.data.data.list)
								this.start += 20;
							})
						}
					}
				}
			}
		},
// 		Updated(){
// 			axios.get(`http://www.xiongmaoyouxuan.com/api/tab/${this.$route.params.kind}?start=0`).then(res=>{
// 				// console.log(res.data)
// 				this.kindList = res.data.data.categories;
// 				this.list = res.data.data.items.list;
// 			})
// 		},
 		watch: {
			'$route' (to, from) {
			axios.get(`http://www.xiongmaoyouxuan.com/api/tab/${this.$route.params.kind}?start=0`).then(res=>{
				// console.log(res.data)
				document.documentElement.scrollTop = document.body.scrollTop = 0;
				this.kindList = res.data.data.categories;
				this.list = res.data.data.items.list;
			})
			}
		},
		components:{
			Title,
			List
		}
	}
</script>

<style scoped lang="scss">
	div.tab{
		background:#f5f5f5;
	}
	div.title{
		text-align: center;
	}
	div.kindlist{
		overflow: hidden;
		background:#fff;
		div.kind{
			height:70px;
			width:25%;
			float:left;
			text-align: center;
			margin-bottom:16px;
			img{
				height:48px;
				display: inline-block;
			}
			p{
				margin-top:6px;
				font-size:12px;
				color:#877a73;
			}
		}
	}
</style>
