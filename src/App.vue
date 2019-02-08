<template>
	<div class="allpendulum">
		<navbar></navbar>
		<section>
		<router-view/>
		</section>
		<div class="toppendulum" @click="toTop" :class="isShow?'':'hidd'">
			<span class="iconfont icon-jiantoushang"></span>
		</div>
  </div>
</template>

<script>
	import navbar from './components/navbar'
export default {
  data(){
		return {
			isShow:false
		}
	},
	components:{
	  navbar
	},
	mounted(){
		var self = this;
		window.addEventListener('scroll',function(){
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			if(scrollTop>1000){
				self.isShow = true;
			}else{
				self.isShow = false;
			}
		})
	},
	methods:{
		toTop(){
			document.documentElement.scrollTop = document.body.scrollTop = 0;     
		}
	}
}
</script>

<style lang="scss">
*{
	padding:0;
	margin:0;
	list-style: none;
}
.zerwinActive{
	border-bottom: 4px solid #43240c;
	box-sizing: border-box;
	margin-top:-4px;
	overflow: hidden;
	span{
		transform: translateY(4px);
		display: block;
	}
a{
	text-decoration: none;
}
a:visited{
	text-decoration: none;
}
}
div.allpendulum{
	div.toppendulum{
		display: block;
		position:fixed;
		right:10px;
		bottom:100px;
		width:45px;
		height:45px;
		line-height: 43px;
		text-align: center;
		border-radius: 50%;
		background:#38b0de;
		opacity: .8;
		span.icon-jiantoushang{
			font-size:26px;
			color:#fff;
		}
	}
	div.hidd{
		display: none;
	}
}
</style>
