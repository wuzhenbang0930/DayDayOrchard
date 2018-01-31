<template>
	<div class="foot" v-if="commodity">
		<footer class="main-nav" id="cart-nav">
          <router-link to="/cart" class="cart-btn" >
            <i class="iconfont" style="font-size: .3rem">&#xe620;</i> 
            <span id="cart-num" >0</span>
          </router-link> 
          <button class="add-cart" @click="addToCart(commodity)">
            <span id="deliver">明日达</span><em>加入购物车</em>
          </button>
        </footer>
	</div>
</template>

<script>
	import axios from "axios"
	export default{
		name:"detail-footer",
		data:function(){
			return{
				commodity:null
			}
		},
		methods:{
			addToCart:function(commodity){
				//启动action
				//dispatch("action的名字")
				this.$store.dispatch("addToCartA",commodity);
			}
		},
		mounted(){
			console.log(this.$route.params.fid);
			var id=this.$route.params.fid;
		axios.get(`/v3//v3/product/detail?store_id_list=3&product_id=${id}&store_id=3&delivery_code=3`)
        .then((res) => {
        console.log(res.data.data);
        this.commodity = res.data.data
      })
		}
	}
</script>

<style scoped>
	.main-nav {
    height: .5rem;
    line-height: .5rem;
    display: block;
    box-shadow: 0 -0.02rem 0.02rem 0 rgba(0,0,0,.15);
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #fff;
}
.cart-btn {
    display: block;
    top: auto;
    right: auto;
    bottom: .05rem;
    left: .05rem;
    position: absolute;
    background: #65a032;
    text-align: center;
    color: #fff;
    width: .5rem;
    height: .5rem;
    line-height: .5rem;
    border-radius: 100%;
}
 .add-cart {
   float:right; 
    display: block;
    width: 1.8rem;
    background: #ff8000;
    font-size: .18rem;
    line-height: .5rem;
    color: #fff;
    display: flex;
    justify-content: space-around;
    border: none;
}
.cart-btn i{display: block}
.cart-btn span {
    background: #ff8000;
    line-height: .14rem;
    border-radius: .15rem;
    min-width: .14rem;
    padding: 0 .02rem;
    top: .03rem;
    right: auto;
    bottom: auto;
    left: .35rem;
    position: absolute;
    font-size: .1rem;
}
 .add-cart span {
    display: inline-block;
    font-size: .14rem;
    color: rgba(255,255,255,.8);
    line-height: .46rem;
    padding-right: .1rem;
    line-height: .5rem;
}
.add-cart em{font-style: italic!important;}
</style>