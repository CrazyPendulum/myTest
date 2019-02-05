<template>
	<div>
		<navbar></navbar>
		<section>
		<router-view/>
		</section>
  </div>
</template>

<script>
	import navbar from './components/navbar'
export default {
  data(){
		return {
			
		}
	},
	components:{
	  navbar
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
}
</style>
