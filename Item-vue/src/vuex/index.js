import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

var state = {
	cart:[]
}


//持久化:从本地取出数据
if(localStorage.getItem("data")){
	var data = JSON.parse(localStorage.getItem("data"));
	state = data;
}

function saveTolocal(state){
	localStorage.setItem("data",JSON.stringify(state));
}

const mutations = {
	addToCart : function(state,goods){
		state.cart.push(goods);
		saveTolocal(state);
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