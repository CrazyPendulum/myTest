<template>
	<div>
		<div class="block" v-if="this.bannerList.length">
		  <el-carousel height="375px"  arrow="hover" indicator-position="none">
		    <el-carousel-item v-for="item in bannerList" :key="item.id">
		      <img :src="item.url" alt="图片显示失败">
		    </el-carousel-item>
		  </el-carousel>
		</div>
		<div class="des" v-if="detail">
			<h1>
				<span :class="detail.isTianmao?'tianmao':'taobao'">{{detail.isTianmao?'天猫':'淘宝'}}</span>
				<span class="baoyou">包邮</span>
				{{detail.title}}
			</h1>
			<p class="price">
				<span class="price">
					￥<span class="left">{{leftPrice(detail.price)}}</span><span class="right">{{rightPrice(detail.price)}}</span>
					<span class="num">月销量:{{detail.saleNum}}</span>
				</span>
			</p>
			<h2 class="title">
				<span class="line"></span>
				<span class="text">淘宝图文详情</span>
				<span class="line"></span>
			</h2>
		</div>
		<div class="imgs" v-if="detail">
			<div class="img" v-for="item in detail.descContentList">
				<div v-if="item.image"><img :src="item.image.url" alt="图片显示失败"></div>
			</div>
		</div>
		<div class="download">
			<a href="https://a.app.qq.com/o/simple.jsp?pkgname=com.lukou.youxuan&ckey=CK1362065872812">
				<span class="download">去熊猫优选APP，商品详情更丰富</span>
			</a>
		</div>
		<div class="space"></div>
		<footer v-if="detail">
			<div class="coupon">{{detail.couponValue?detail.couponValue:''}}</div>
			<button>{{detail.couponValue?'领劵购买':'去淘宝买'}}</button>
		</footer>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		data(){
			return{
				bannerList:[],
				detail:null
			}
		},
		beforeMount(){
			axios.get(`http://www.xiongmaoyouxuan.com/api/detail?id=${this.$route.params.id}&normal=1&sa=`).then(res=>{
				this.bannerList = res.data.data.detail.photo;
				this.detail= res.data.data.detail;
			})
			
			this.$store.commit('hideNavbar')
		},
		beforeDestroy(){
			this.$store.commit('showNavbar')
		},
		methods:{
			leftPrice(price){
				price = price+'';
				var index = price.indexOf('.')
				if(index===-1){
					return price;
				}
				var data = price.slice(0,index)
				return data;
			},
			rightPrice(price){
				price = price+'';
				var index = price.indexOf('.')
				if(index===-1){
					return '';
				}
				var data = price.slice(index)
				return data;
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
	div.des{
		padding:12px;
		h1{
			color: #43240c;
			font-size:16px;
			line-height:22px;
			font-weight: 400;
			span.tianmao,span.taobao{
				font-size:12px;
				background:#f40;
				color:#fff;
				padding:0 2px;
				border-radius: 2px; 
			}
			span.tianmao{
				background:#df2b2f;
			}
			span.baoyou{
				font-size:12px;
				color:#aaa;
				padding:0 2px;
				border-radius: 2px;
				border:1px solid #aaa;
			}
		}
		p.price{
			color:#fa585a;
			font-size:13px;
			font-weight: 800;
			line-height: 53px;
			margin-top:6px;
			span.left{
				font-size:30px;
			}
			span.right{
				font-size:20px;
			}
			span.num{
				color:#b1a9a5;
				font-weight: 400;
				font-size:12px;
				float:right;
				margin-top:6px;
			}
		}
		h2.title{
			text-align: center;
			line-height:40px;
			height:40px;
			font-weight: 400;
			span.line{
				display: inline-block;
				width:10%;
				height:1px;
				background:#b1a9a5;
				vertical-align: middle;
			}
			span.text{
				color:#b1a9a5;
				font-size:12px;
				vertical-align: middle;
			}
			
		}
	}
	div.img{
		img{
			width:100%;
			display: block;
		}
	}
	div.download{
		text-align: center;
		background:#333;
		height:120px;
		line-height: 120px;
		a{
			color:#fa521e;
			text-decoration: none;
			font-size:14px;
			display: inline-block;
			span{
				padding:5px 15px;
				border-radius: 20px;
				border:1px solid #fa521e;
			}
		}
	}
	div.space{
		height:80px;
	}
	footer{
		height:50px;
		position:fixed;
		bottom:0;
		width:100%;
		div{
			height:100%;
			width:60%;
			line-height: 50px;
			color: #fa585a;
			font-size:17px;
			text-align: right;
			float:left;
			padding-right:20px;
			box-sizing: border-box;
			background:#fff;
		}
		button{
			width:40%;
			float:right;
			height:100%;
			outline: none;
			border:none;
			background:#fa585a;
			color:#fff;
			font-weight: 800;
			font-size:16px;
		}
	}
</style>
