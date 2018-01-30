<template>
	<div class="detail">
		<template v-if="detail&&appraise">
			<nav>
				<div class="back">
				    <a href="javascript:history.go(-1)" class="iconfont">&#xe51b;</a>
			    </div>
			    <div class="tab">
					<ul class="tab-menu">
						<li class="active">商品</li>
						<li><router-link :to="{name:'details', params:{fid: detail.productItem[0].id}}">详情</router-link></li>
						<li><a>评价</a></li>
					</ul>
			    </div>
			    <div class="more">
			    	<i class="iconfont">&#xe637;</i>
			    </div>
			</nav>
      <router-view/> 
  <div class="mains">
			<div class="lunbo">
		   	    <mt-swipe :auto="4000">
				  <mt-swipe-item v-for="item in detail.templatePhoto"><img :src="item.image" width="100%"></mt-swipe-item>
				</mt-swipe>
			</div>
			<div class="info-item"> 
				<h3>{{detail.productInfo.product_name}}</h3> 
				<h4>{{detail.productInfo.product_desc}}</h4>  
				<div class="prices">
					￥{{detail.productInfo.price}}
				</div> 
        <div class="size">  
          <span class="cur"> 
            <strong>500g</strong> 
            <small>  明日达  </small> 
          </span>   
          <em>{{detail.deliveryMsg}}</em> 
        </div>
        <h5>{{detail.productInfo.op_weight}}</h5>
			</div>
      <div class="address-item"> <span class="title">送至</span> <h4>沙河镇</h4> </div>
      <div class="tips-item"> 
        <span>48小时退换货</span> 
        <span>全程冷链</span> 
        <span>果园标准</span> 
        <span>全球直采</span>
      </div>
      <div class="comment-total"><span>评价(2016)</span><span class="pull-right"><small class="orange">98%</small>好评<i class="iconfont icon-morehome"></i></span></div>

      <div class="comment-con-chief" v-for="item in appraise.data"> 
        <div class="comment-info"> 
            <div class="comment-in">
              <img class="avatar" :src="item.userface"> 
              <span class="user">{{item.user_name}}</span>
            </div>
          <span class="date">{{item.time}}</span>
        </div> 
        <div class="comment-level">
          <span>口感 {{item.star_eat}}</span>
          <span>颜值 {{item.star_show}}</span>
        </div> 
          <div class="comment-msg">{{item.content}}</div>  
        </div>
       <div class="look"><span class="looks">查看全部评论</span></div>
       <div style="height: .5rem"></div>
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
		</template>
	</div>
</template>

<script>
  import axios from "axios"
export default {
  name: 'detail',
  data:function(){
    return{
      detail:null,
      appraise:null
    }
  },
  components: {
   
  },
  mounted(){
    console.log(this.$route.params.fid);
    var id=this.$route.params.fid;
    axios.get(`/v3//v3/product/detail?store_id_list=3&product_id=${id}&store_id=3&delivery_code=3`)
      .then((res) => {
        console.log(res.data.data);
        console.log(res.data.data.productItem[0].id);
        this.detail = res.data.data;
      })
      axios.get(`/v3//v3/comment/rate_and_comment?product_id=${id}`)
      .then((res) => {
        this.appraise = res.data.data;
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
.active{border-bottom: 2px solid #75a739}
.tab{width: 50%;}
.tab ul{display: flex;justify-content: space-around;}
.tab ul li a{color: #000;}
.more{width: 25%;text-align: right;padding-right: 0.1rem;}
.lunbo{height: 3.2rem;margin-top: .45rem;}
.mains{background: #ddd;}
 .info-item {
    padding: .1rem;
    margin-bottom: .1rem;
    background: #fff;
    text-align: center;
}
.info-item>h3 {
    font-size: .16rem;
    color: #3a3a3a;
}
 .info-item>h4 {
    font-size: .12rem;
    color: #878787;
}
.prices{
  height: 0.2rem;
 font-size: .20rem;
 color: #ff8000;
 margin-top: .1rem;
}
.size{display: flex;flex-direction: column;font-size: .14rem;margin-top: .1rem;}
.cur{display:flex;border: .01rem solid #dcdcdc;border-radius: .04rem; padding: .04rem .1rem;margin: 0 .05rem; height: .5rem;line-height: 1.4;color: #3a3a3a;width: .6rem;flex-direction: column;margin-left: 40%;}
.size em {
    font-size: .1rem;
    display: block;
    color: #ff8000;
}
.info-item>h5 {
    margin-bottom: 0;
    font-size: .1rem;
    color: #878787;
}
 .address-item {
    position: relative;
    padding: .1rem .1rem .1rem .45rem;
    margin-bottom: .1rem;
    background: #fff;
}
.address-item>.title {
    top: .15rem;
    right: auto;
    bottom: auto;
    left: .1rem;
    position: absolute;
    font-size: .12rem;
    color: #878787;
}
 .address-item>h4 {
    margin: 0;
    height: .25rem;
    font-size: .13rem;
    line-height: .25rem;
    font-weight: 400;
    color: #3a3a3a;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.tips-item {
    position: relative;
    padding: 0.05rem .1rem;
    margin-bottom: .1rem;
    background: #fff;
    height: 0.25rem
}
.tips-item>span {
    float: left;
    padding: .02rem .05rem .02rem 0;
    font-size: .1rem;
    color: #bfbfbf;
}
.comment-total {
    margin-left: .1rem;
    padding-right: .1rem;
    height: .25rem;
    border-bottom: .01rem solid #d8d8d8;
    font-size: .12rem;
    color: #878787;
    display: flex;
    justify-content: space-between;
}
.orange{
  color: #ff8000;
}
.comment-con-chief {
    padding: .15rem .1rem .15rem .1rem;
    color: #3a3a3a;
    background: #fff;
    font-size: .14rem;
}
.comment-info {
    height: .3rem;
    line-height: .3rem;
    display: flex;
    justify-content: space-between;
}
.comment-in{
  display: flex;
}
.avatar {
    width: .3rem;
    height: .3rem;
    margin-right: .15rem;
    border-radius: 100%;
}
.user {
    margin-right: .05rem;
    font-size: .14rem;
}
.comment-info>.date {
    font-size: .13rem;
    color: #878787;
}
.comment-level {
    height: .3rem;
    font-size: .13rem;
    line-height: .3rem;
    color: #878787;
}
.look{text-align: center;background: #fff;font-size: .14rem;padding-bottom: 0.2rem}
 .looks {
    border: .01rem solid #878787;
    border-radius: .76rem;
    padding: 0 .15rem;
    color: #878787;
}
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