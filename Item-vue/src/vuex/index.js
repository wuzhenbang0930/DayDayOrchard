import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

var state = {
	cart:[],
	islogin : 0
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
	changeLogin : function(state,data1){
    	state.isLogin = data1;
  	},
	addToCart : function(state,goods){
		state.cart.push(goods);
		saveTolocal(state);
	}
}

const actions = {
	addToCartA: function({commit},goods){
		commit("addToCart",goods)
	},
	changeLoginA :function({commit},data1){
		commit("change", data1)
	}

}

export default new Vuex.Store({
	state,
	mutations,
	actions

})