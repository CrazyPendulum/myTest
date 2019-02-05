<template>
	<div>
		<ul>
			<li v-for="item in list" :key="item.imageUrl">
				<img :src="item.image" alt="图片显示失败" v-if="item.type===2" class="type2">
				<div class="brand" v-else-if="item.type===1">
					<img :src="item.image" alt="图片显示失败">
					<div class="des">
						<p class="title">{{item.title}}</p>
						<div class="keyword">
							<span class="left">{{item.platform===1?'淘宝':'天猫'}}</span>
							<span class="right">包邮</span>
						</div>
						<div class="foot">
							<span class="price">￥<span>{{item.price}}</span></span>
							<span class="bought">{{item.saleNum}}人已买</span>
							<!-- <span class="juan" v-if="item.couponValue">{{item.couponValue}}</span> -->
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		props:['list']
	}
</script>
<style scoped lang="scss">
	img{
		width:100%;
	}
	ul{
		overflow: hidden;
		li{
			width:50%;
			height:277px;
			float:left;
			margin-bottom:6px;
			box-sizing: border-box;
			img.type2{
				height:100%;
			}
			div.des{
				padding: 9px 6%;
				height:85px;
				box-sizing: border-box;
				div.keyword{
					margin-top:5px;
					overflow: hidden;
					span{
						font-size:12px;
						
					}
					span.left{
						float:left;
						background:#f40;
						color:#fff;
						padding:0 2px;
						border-radius: 2px;
						margin-left:5px;
					}
					span.right{
						float:right;
						color:#877a73;
					}
				}
				div.foot{
					margin-top:5px;
					span.price{
						font-size:12px;
						color:#fa585a;
						span{
							font-size:18px;
						}
					}
					span.bought{
						color:#877a73;
						margin-left:5px;
						font-size:12px;
					}
					span.juan{
						color: #fa585a;
						border:1px solid #fa585a;
						float:right;
						font-size:12px;
						border-radius: 2px;
						margin-top:3px;
					}
				}
				p{
					font-size:12px;
					color:#877a73;
					text-overflow: ellipsis;
					white-space: nowrap;
					overflow: hidden;
				}
			}
		}
		li:nth-child(odd){
			padding-right:3px;
		}
		li:nth-child(even){
			padding-left:3px;
		}
	}
</style>
