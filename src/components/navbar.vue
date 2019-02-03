<template>
	<div id="navbar">
		<div id="top">
			<div class="search">
				<span class="iconfont icon-search"></span>
				<span>搜索商品，发现更多优品</span>
			</div>
		</div>
		<div class="nav">
			<router-link tag="div" to="/" activeClass="zerwinActive" class="now">
				<span>今日推荐</span>
			</router-link>
			<div class="line"></div>
			<div class="kind">
				<ul>
					<router-link tag="li" to="/" activeClass="zerwinActive">
						<span>今日推荐</span>
					</router-link>
					<router-link tag="li" to="/" activeClass="zerwinActive">
						<span>今日推荐</span>
					</router-link>
					<router-link tag="li" to="/" activeClass="zerwinActive">
						<span>今日推荐</span>
					</router-link>
					<router-link tag="li" to="/" activeClass="zerwinActive">
						<span>今日推荐</span>
					</router-link>
					<router-link tag="li" to="/" activeClass="zerwinActive">
						<span>今日推荐</span>
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
// 			
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
				ul{
					display: flex;
					box-sizing: border-box;
					li{
						height:100%;
						font-size:15px;
						color:#6b4c10;
						// float: left;
						margin-left:3%;
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
</style>
