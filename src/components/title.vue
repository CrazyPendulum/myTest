<template>
	<div :class="isWhite?'white':''">
		<span class="left"></span>
		<span class="title"><span>{{text}}</span></span>
		<span class="right"></span>
	</div>
</template>

<script>
	export default{
		props:{
			text:String,
			isWhite:Boolean
		}
	}
</script>

<style scoped lang="scss">
	div{
		height:50px;
		overflow: hidden;
		span{
			display: inline-block;
			vertical-align: middle;
		}
		span.left,span.right{
			height:1px;
			width:12%;
			background:#fdde4a;
		}
		span.title{
			span{
				color:hsla(21,8%,49%,.7);;
				font-size:12px;
				margin:0 20px;
				line-height: 50px;
			}
		}
		span.title::after{
			content: '';
			    border: 3px solid #fdde4a;
				width:0px;
				height:0px;
				display: inline-block;
				box-sizing: border-box;
				transform: rotate(45deg);
				margin-right:-5px;
		}
		span.title::before{
			content: '';
			    border: 3px solid #fdde4a;
				width:0px;
				height:0px;
				display: inline-block;
				box-sizing: border-box;
				transform: rotate(45deg);
				margin-left:-5px;
		}
		span.right{
			
		}
		div.white{
			background:#fff;
		}
	}
</style>
