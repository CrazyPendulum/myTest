<template>
	<div id="navbar" v-if="this.$store.state.isShow" :class="isFixed?'fixed':''">
		<div id="top" >
			<div class="search">
				<span class="iconfont icon-search"></span>
				<span>搜索商品，发现更多优品</span>
			</div>
		</div>
		<div class="nav">
			<router-link tag="div" to="/" activeClass="zerwinActive" class="now" exact>
				<span>今日推荐</span>
			</router-link>
			<div class="line"></div>
			<div class="kind">
				<ul>
					<router-link tag="li" to="/tab/2" activeClass="zerwinActive">
						<span>女装</span>
					</router-link>
					<router-link tag="li" to="/tab/5" activeClass="zerwinActive">
						<span>男装</span>
					</router-link>
					<router-link tag="li" to="/tab/3" activeClass="zerwinActive">
						<span>美妆护肤</span>
					</router-link>
					<router-link tag="li" to="/tab/4" activeClass="zerwinActive">
						<span>配饰</span>
					</router-link>
					<router-link tag="li" to="/tab/13" activeClass="zerwinActive">
						<span>女鞋</span>
					</router-link>
					<router-link tag="li" to="/tab/19" activeClass="zerwinActive">
						<span>男鞋</span>
					</router-link>
					<router-link tag="li" to="/tab/10" activeClass="zerwinActive">
						<span>零食王国</span>
					</router-link>
					<router-link tag="li" to="/tab/24" activeClass="zerwinActive">
						<span>母婴用品</span>
					</router-link><router-link tag="li" to="/tab/14" activeClass="zerwinActive">
						<span>箱包</span>
					</router-link>
					<router-link tag="li" to="/tab/15" activeClass="zerwinActive">
						<span>个人洗护</span>
					</router-link>
					<router-link tag="li" to="/tab/6" activeClass="zerwinActive">
						<span>手机周边</span>
					</router-link>
					<router-link tag="li" to="/tab/12" activeClass="zerwinActive">
						<span>数码家电</span>
					</router-link><router-link tag="li" to="/tab/16" activeClass="zerwinActive">
						<span>内衣袜子</span>
					</router-link>
					<router-link tag="li" to="/tab/17" activeClass="zerwinActive">
						<span>成人用品</span>
					</router-link>
					<router-link tag="li" to="/tab/7" activeClass="zerwinActive">
						<span>日用家居</span>
					</router-link>
					<router-link tag="li" to="/tab/11" activeClass="zerwinActive">
						<span>文体娱乐</span>
					</router-link>
				</ul>
			</div>
			<div class="menu">
				<span class="iconfont icon-caidan"></span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				// scrollTop:0,
				isFixed:false
			}
		},
		beforeMount(){
			var self = this;
			window.addEventListener('scroll',function(){
				 var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				 if(scrollTop>0){
					 self.isFixed = true;
				 }else if(scrollTop===0){
					 self.isFixed = false;
				 }
			})
		}
	}
</script>
	
<style scoped lang="scss">
	#navbar{
		background:#fdde4a;
		#top{
			height:50px;
			width:100%;
			color:#999;
			overflow: hidden;
			.search{
				box-sizing: border-box;
				background: #fff;
				width:90%;
				height:60%;
				margin-top:10px;
				margin-left:5%;
				border-radius:10px;
				span{
					font-size: 14px;
					line-height: 30px;
				}
				span.iconfont{
					font-size: 20px;
					margin-left:3%;
				}
			}
		}
		div.nav{
			line-height: 50px;
			margin-top:-10px;
			overflow: hidden;
			color:#43240c;
			height:50px;
			display: flex;
 			box-shadow: 1px 2px 5px hsla(0,11%,79%,.5);
			div.now{
				font-size:15px;
				margin-left:5%;
			}
			div.line{
				width:1px;
				height:22px;
				background: #877a73;
				margin-top:14px;
				margin-left:2%;
			}
			div.kind{
				height:100%;
				flex:1;
				overflow: auto;
				margin:0 10px;
				ul{
			        display:flex;
					width:950px;
					box-sizing: border-box;
					
					li{
						height:100%;
						font-size:15px;
						color:#6b4c10;
						// float: left;
						margin-left:10px;
					}
				}
			}
			div.menu{
				margin-right:5%;
				span{
					font-size:20px;
				}
			}
		}
	}
	div.fixed{
		#top{
			display: none;
		}
		div.nav{
			position: fixed;
			width:100%;
			top:0;
			left:0;
			background:#fdde4a;
			line-height: 50px;
			transform: translateY(10px);
			z-index: 88;
		}
	}
</style>
