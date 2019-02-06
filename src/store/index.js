import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		isShow:true
	},
	mutations:{
		hideNavbar(state,payload){
			state.isShow = false;
		},
		showNavbar(state,payload){
			state.isShow = true;
		}
	}
})

export default store;