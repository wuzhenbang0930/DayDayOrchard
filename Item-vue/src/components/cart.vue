<template>
	<div class="cart">
		<mt-header title="购物车" class="top">
		  <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		  <mt-button slot="right" class="redact">编辑</mt-button>
		</mt-header>
		<div class="specific"> 
			<div class="infor">  添加地址  </div> 
			<i class="iconfont">&#xe728;</i> 
		</div>

        <div class="carts">
            <div v-for="item in $store.state.cart" class="line-wrapper">
                <div class="left">
                    <div class="pro-img"><img :src="item.templatePhoto[0].middle_image"></div>
                    <div class="pro-main">
                        <div>{{item.productInfo.product_name}}</div>
                        <div>{{item.productItem[0].volume}}</div>
                        <div>
                            <span>￥</span>
                            <em>{{item.productInfo.price}}</em>
                            <span class="tag" style="background: #FF8000;color: #fff"> 明日达  </span>
                        </div>
                    </div>
                </div>
                <div class="count">
                    <span class="minus">
                        <i class="icon-jian">-</i>
                    </span> 
                    <span class="num">1</span> 
                    <span class="plus">
                        <i class="icon-searchplus">+</i>
                    </span>
                </div>
            </div>
        </div>
        <div style="height: 1rem"></div>
        <div class="base-nav" id="cart-nav" style="bottom: .42rem;">
            <div class="info"> 
                <div class="total">合计：<small>￥</small><em>{{prices}}</em></div>  
            </div> 
                <a class="account" href="javascript:;">结算 ({{$store.state.cart.length}})</a> 
        </div>
      <indexfoot></indexfoot>
	</div>
</template>
<script>

import axios from 'axios'

    import indexfoot from './footer1'

	export default{
		name:"cart",
		data:function(){
			return{
                prices:0
			}
		},
		mounted(){
            var len = this.$store.state.cart.length;
            for(var i = 0;i<len;i ++){
                this.prices += Number(this.$store.state.cart[i].productInfo.price)
            }
            //console.log(this.prices);
             // var storage = window.localStorage;
             // var data = storage.getItem("data");
             //console.log(data);
             
		},
        components:{
            indexfoot,
        }

	}



</script>

<style scoped>

.top{height:.5rem;background: #fff;color: #75a739;font-size: .16rem;border-bottom: .01rem solid #d8d8d8;
position: fixed;top: 0;left: 0;width: 100%}
.redact{font-size: .12rem!important;}
.specific {
    height: .4rem;
    padding: 0 0.1rem;
    font-size: .14rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #d8d8d8;
    line-height: .4rem;
    margin-top: .5rem;
 }
.line-wrapper{width: 100%;display: flex;font-size: .14rem;padding:.1rem .15rem;border-bottom: 1px solid #ccc; justify-content: space-between;}
.pro-img{    
    width: .9rem;
    height: .9rem;
    margin-right: .1rem;
    border-radius: .04rem;
    overflow: hidden;
}
.left{display: flex;}
.pro-img img{
    width: 100%;
    height: 100%;
}
.pro-main div:nth-child(1){
    margin: 0 0 .05rem;
    height: .3rem;
    font-size: .14rem;
    line-height: .15rem;
    font-weight: 400;
    color: #3a3a3a;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
.pro-main div:nth-child(2){
    height: .15rem;
    margin: 0 0 .05rem;
    font-weight: 400;
    font-size: .1rem;
    line-height: .15rem;
    color: #878787;
}
.pro-main div:nth-child(3){
    font-size: .12rem;
    color: #bfbfbf;
    padding-top:.1rem; 
}
.pro-main div:nth-child(3) span {
    font-size: .1rem;
    color: #ff8000;
}
.pro-main div:nth-child(3) em {
    font-style: normal;
    color: #ff8000;
}
.count{
    display: flex;
    align-self: flex-end;
}
.count i{font-style: normal;}
 .plus>i,.icon-jian {
    display: inline-block;
    width: .2rem;
    height: .2rem;
    border: .01rem solid #bfbfbf;
    border-radius: 100%;
    font-size: .16rem;
    line-height: .2rem;
    color: #ff8000;
    text-align: center; 
}
.num{
    margin: 0 .2rem;
}
.base-nav{
    position: fixed;
    font-size: .14rem;
    display: flex;
    height: .5rem;
    background: #fff;
    width: 100%;
    padding: 0 .1rem;
    justify-content: space-between;
}
.total {
    font-size: .14rem;
    color: #878787;
    line-height: .5rem;
}
.total small {
    font-size: .1rem;
    color: #ff8000;
}
.total em{
    color: #ff8000;
    font-style: normal;
}
.account {
    display: inline-block;
    min-width: 1rem;
    height: .5rem;
    padding: 0 .05rem;
    background: #ff8000;
    font-size: .16rem;
    line-height: .5rem;
    color: #fff;
    text-align: center;
}
.del{
    line-height: .5rem;
    font-size: .12rem;
    color: #666;
    padding-left: .3rem;
}
</style>