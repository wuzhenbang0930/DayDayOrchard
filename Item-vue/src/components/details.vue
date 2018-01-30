<template>
	<div class="particulars" v-if="details">
			<nav>
					<div class="back">
					    <a href="#" class="iconfont">&#xe51b;</a>
				    </div>
				    <div class="tab">
						<ul class="tab-menu">
							<li class="active"><router-link :to="{name:'detail', params:{fid: details.productItem[0].id}}">商品</router-link></li>
							<li><router-link :to="{name:'details', params:{fid: details.productItem[0].id}}">详情</router-link></li>
							<li><router-link :to="{name:'detaila', params:{fid: details.productItem[0].id}}">评价</router-link></li>
						</ul>
				    </div>
				    <div class="more">
				    	<i class="iconfont">&#xe637;</i>
				    </div>
				</nav>
			<div v-html="details.templateInfo.desc_mobile" class="details-desc">
			</div>
			<footer class="main-nav" id="cart-nav">
			    <a class="cart-btn" href="./cart.html">
			      <i class="iconfont" style="font-size: .3rem">&#xe620;</i> 
			      <span id="cart-num" >0</span>
			    </a> 
			    <a class="add-cart" href="javascript:;">
			      <span id="deliver">明日达</span><em>加入购物车</em>
			    </a>
			</footer>
	</div>
</template>

<script>
import axios from "axios"
export default {
  name: 'particulars',
  data:function(){
    return{
      details:null
    }
  },
  mounted(){
  	//console.log(this.$route.params.fid);
    var id=this.$route.params.fid;
    axios.get(`/v3//v3/product/detail?store_id_list=3&product_id=${id}&store_id=3&delivery_code=3`)
      .then((res) => {
        console.log(res.data.data);
        this.details = res.data.data;
      })
  }
}
</script>
<style scoped>
@import url("../assets/font/iconfont.css");
nav {
    background: #fff;
    color: #75a739;
    height: .45rem;
    line-height: .43rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    border-bottom: .01rem solid #d8d8d8;
    font-size: 0.14rem;
    display: flex;
    z-index: 99;
}
.back{width: 25%;padding-left: 0.1rem;}
.back a{font-size: 0.2rem;color:#75a739 }

.tab{width: 50%;}
.tab ul{display: flex;justify-content: space-around;}
.tab ul li a{color: #000;}
.tab ul li:nth-child(2) a{color: #75a739}
.tab ul li:nth-child(2){border-bottom: 2px solid #75a739}
.more{width: 25%;text-align: right;padding-right: 0.1rem;}
.details-desc{margin-top: .45rem}
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