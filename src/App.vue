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

<style>
*{
	padding:0;
	margin:0;
	list-style: none;
}
</style>
