<template>
	<div>
		<div class="top">
			<span class="left" @click="returnpage">返回</span>
			<div class="search">
				<input type="text" placeholder="搜索商品,发现更多优选">
				<span class="iconfont icon-search"></span>
				<span class="null"></span>
			</div>
			<span class="right">搜索</span>
		</div>
			<section class="hotwords">
				<h2 class="title">热门搜索</h2>
				<span v-for="item in hotwordsList" :class="item.highlight?'highlight':''" :key="item.word">
					{{item.word}}
				</span>
			</section>
			<section class="category">
				<h2 class="title">商品分类</h2>
				<div class="category-item" v-for="item in category" :key="item.name">
					{{item.name}}
				</div>
			</section>
			<a class="app" href="https://a.app.qq.com/o/simple.jsp?pkgname=com.lukou.youxuan&ckey=CK1362065872812">
				<span class="app">去熊猫优选app,找更多优惠</span>
			</a>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				hotwordsList:[],
				category:[]
			}
		},
		methods:{
			returnpage(){
				this.$router.go(-1)
			}
		},
		beforeMount(){
			this.$store.commit('hideNavbar');
			axios.get('http://www.xiongmaoyouxuan.com/api/search/home').then(res=>{
				this.hotwordsList = res.data.data.hotWords.slice(0,8);
			});
			axios.get('http://www.xiongmaoyouxuan.com/api/tabs?sa=').then(res=>{
				this.category = res.data.data.list.slice(1);
			})
		},
		beforeDestroy(){
			this.$store.commit('showNavbar')
		}
	}
</script>

<style scoped lang="scss">
	div.top{
		height:50px;
		background:#fdde4a;
		overflow: hidden;
		line-height: 50px;
		text-align:center;
		color:#43240c;
		box-shadow: 1px 2px 5px hsla(0,11%,79%,.5);
		span.left{
			float:left;
			margin-left:20px;
		}
		div.search{
			width:70%;
			display: inline-block;
			position:relative;
			height:100%;
			color: #877a73;
			input{
				height:30px;
				width:95%;
				border:none;
				outline: none;
				background:#eee;
				border-radius: 6px;
				transform: translateY(-2px);
				font-size:16px;
				text-indent: 14%;
			}
			span.iconfont{
				position:absolute;
				left:6%;
				font-size:23px;
			}
		}
		span.right{
			float:right;
			margin-right:20px;
		}
	}
	section.hotwords{
		padding:0 20px;
		h2{
			margin:20px 0;
			color:#877a73;
			font-weight: 400;
			font-size:15px;
		}
		span.highlight{
			color:#fa585a;
		}
		span{
			text-align: center;
			background:#f5f5f5;
			padding:3px 10px;
			box-sizing: border-box;
			margin-right:11px;
			margin-bottom:15px;
			border-radius: 8px;
			display: inline-block;
			font-size:15px;
			color:#43240c;
		}
	}
	section.category{
		overflow: hidden;
		h2{
			margin:20px;
			color:#877a73;
			font-weight: 400;
			font-size:15px;
		}
		div.category-item{
			width:25%;
			float:left;
			text-align: center;
			margin-bottom:20px;
			font-size:15px;
		}
	}
	a.app{
		height:15px;
		display: block;
		text-align: center;
		margin-top:20px;
		span{
			display: inline-block;
			padding: 5px 15px;
			border:1px solid #fa521e;
			color:#fa521e;
			font-size:14px;
			border-radius: 15px;
		}
	}
</style>
