import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
	cart:[]
}

const mutations = {
	addToCart : function(state,goods){
		state.cart.push(goods);
	}
}

const actions = {
	addToCartA: function({commit},goods){
		commit("addToCart",goods)
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions

})