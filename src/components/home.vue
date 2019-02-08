<template>
	<div class="all" ref='test'>
		 <div class="block" v-if="this.bannerList.length">
		  <el-carousel height="140px">
		    <el-carousel-item v-for="item in bannerList" :key="item.imageUrl">
		      <a :href="item.url"><img :src="item.imageUrl" alt="图片显示失败"></a>
		    </el-carousel-item>
		  </el-carousel>
		</div>
		<div class="three" v-if="gridsV2.length">
			<div class="left">
				<p class="title">{{this.gridsV2[0].title}}</p>
				<p class="text">{{this.gridsV2[0].text}}</p>
				<img :src="gridsV2[0].imageUrl" alt="显示失败">
			</div>
			<div class="right">
				<div class="top">
					<p class="title">{{this.gridsV2[3].title}}</p>
					<p class="text">{{this.gridsV2[3].title}}</p>
					<img :src="gridsV2[3].imageUrl" alt="显示失败">
				</div>
				<div class="bottom">
					<p class="title">{{this.gridsV2[4].title}}</p>
					<p class="text">{{this.gridsV2[4].title}}</p>
					<img :src="gridsV2[4].imageUrl" alt="显示失败">
				</div>
			</div>
		</div>
		<div class="title_home">
			<Title text="小编精选，全场特惠 (ง •̀_•́)ง"></Title>
		</div>
		<List v-bind:list="list" v-if="list.length"></List>
	</div>
</template>
<script>
	import 'element-ui/lib/theme-chalk/index.css';
	import axios from 'axios'
	import Title from './title'
	import List from './brandList'
	export default {
		data(){
			return{
				bannerList:[],
				gridsV2:[],
				list:[],
				start:0,
				lazyCount:0
			}
		},
		mounted(){
			axios({
				url:'http://www.xiongmaoyouxuan.com/api/tab/1?start=0',
				method:'get'
			}).then(res=>{
				// console.log(res.data)
				this.bannerList = res.data.data.banners;
				this.gridsV2 = res.data.data.gridsV2;
				this.list = res.data.data.items.list;
				this.start += 20;
				this.lazyCount += 1;
			})
			 window.addEventListener('scroll', this.handleScroll)
		},
		components:{
			Title,
			List
		},
		beforeDestroy(){
			window.removeEventListener('scroll',this.handleScroll())
		},
		methods:{
			handleScroll(){
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				if(this.$refs.test){
					if(scrollTop>this.$refs.test.clientHeight-document.documentElement.clientHeight-1000){
						if(this.start === this.lazyCount*20){
							this.lazyCount += 1;
							axios.get(`http://www.xiongmaoyouxuan.com/api/tab/1/feeds?start=${this.start}&sort=0`).then(res=>{
								this.list.push(...res.data.data.list)
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
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .block img{
	  width:100%;
  }
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
 
  div.three{
	height:153px;
	padding:10px 10px;
	width:100%;
	box-sizing:border-box;
	overflow: hidden;
	div{
		border-radius:10px;
	}
	p.title{
		font-size:16px;
		margin-left:13px;
		margin-top:10px;
	}
	p.text{
		margin-left:13px;
		color:#ff9e55;
		font-size:12px;
	}
	div.left{
		box-sizing:border-box;
		width:50%;
		padding-right:8px;
		height:100%;
		background: #fdf4e6;
		overflow: hidden;
		position:relative;
		float:left;
		img{
			height:100%;
			position:absolute;
			right:0;
			bottom:0;
		}
		}
	div.right{
		box-sizing:border-box;
		padding-left:8px;
		width:50%;
		height:100%;
		float:right;
		p.title{
			font-size: 15px;
		}
		img{
			position:absolute;
			top:0;
			right:10px;
			height:100%;
		}
		div{
			height:45%;
		}
		div.top{
			background:#fff3f1;
			overflow: hidden;
			position:relative;
		}
		div.bottom{
			margin-top:12px;
			background:#eef9fc;
			overflow: hidden;
			position:relative;
		}
	}	
  }
  div.title_home{
	  text-align: center;
  }
</style>
