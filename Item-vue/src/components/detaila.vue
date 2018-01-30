<template>
  <div class="detaila" v-if="detaila&&evaluate">
      <nav>
          <div class="back">
              <a href="javascript:history.go(-1)" class="iconfont">&#xe51b;</a>
            </div>
            <div class="tab">
            <ul class="tab-menu">
              <li class="active"><router-link :to="{name:'detail', params:{fid: detaila.productItem[0].id}}">商品</router-link></li>
              <li><router-link :to="{name:'details', params:{fid: detaila.productItem[0].id}}">详情</router-link></li>
              <li><router-link :to="{name:'detaila', params:{fid: detaila.productItem[0].id}}">评价</router-link></li>
            </ul>
            </div>
            <div class="more">
              <i class="iconfont">&#xe637;</i>
            </div>
        </nav>

        <div class="good-comment">
          <div id="good-comment-star">
            <dl class="comment-level-item"> 
              <dt>
                <span>97%</span><span>好评</span>
              </dt> 
              <dd> 
                <div> 
                  <span class="pull-left">口感</span>  
                  <img src="https://wap.fruitday.com/content/images/main/lighting_star@3x-cedc664b96.png">  
                  <img src="https://wap.fruitday.com/content/images/main/lighting_star@3x-cedc664b96.png">  
                  <img src="https://wap.fruitday.com/content/images/main/lighting_star@3x-cedc664b96.png">  
                  <img src="https://wap.fruitday.com/content/images/main/lighting_star@3x-cedc664b96.png">   
                  <img src="https://wap.fruitday.com/content/images/main/half_star@3x-f43e6f0b42.png">   
                </div> 
                <div> 
                  <span class="pull-left">颜值</span>  
                  <img src="https://wap.fruitday.com/content/images/main/lighting_star@3x-cedc664b96.png">  
                  <img src="https://wap.fruitday.com/content/images/main/lighting_star@3x-cedc664b96.png">  
                  <img src="https://wap.fruitday.com/content/images/main/lighting_star@3x-cedc664b96.png">  
                  <img src="https://wap.fruitday.com/content/images/main/lighting_star@3x-cedc664b96.png">   
                  <img src="https://wap.fruitday.com/content/images/main/half_star@3x-f43e6f0b42.png">  
                </div> 
              </dd> 
            </dl> 
            <div class="comment-tab-menu"> 
              <ul> 
                <li class="active">评价 44951</li>
                <li class="">晒图 9781</li> 
              </ul> 
            </div>
          </div>

           <div class="comment-con-chief" v-for="item in evaluate"> 
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
  </div>	
</template>
<script>
	import axios from "axios"
export default {
  name: 'particulars',
  data:function(){
  	return{
      detaila:null,
      evaluate:null
  	}
  },
  mounted(){
  	var id=this.$route.params.fid;
    axios.get(`/v3//v3/product/detail?store_id_list=3&product_id=${id}&store_id=3&delivery_code=3`)
      .then((res) => {
        console.log(res.data.data);
        this.detaila = res.data.data;
      })
      axios.get(`/v3//v3/comment/list_by_product_id?product_id=${id}&curr_page=1&num_per_page=20&limit=20&show=1`)
      .then((res) => {
        console.log(res.data.data);
        this.evaluate = res.data.data;
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
.tab ul li:nth-child(3) a{color: #75a739}
.tab ul li:nth-child(3){border-bottom: 2px solid #75a739}
.more{width: 25%;text-align: right;padding-right: 0.1rem;}
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
.good-comment{
  margin-top: .45rem;
  font-size: .14rem;
}
.comment-level-item {
    padding: .1rem .1rem;
    height: .7rem;
    display: flex;
}
.comment-level-item>dt {
    width: 20%;
    height: .5rem;
    padding: .08rem 0;
    margin-right: .3rem;
    border-radius: 50%;
    background: #ff8000;
    font-size: .14rem;
    color: #fff;
    text-align: center;
    display: flex;
    flex-direction: column;
}
.comment-level-item>dd {
    width: 80%;
    display: flex;
    flex-direction: column;
}
.comment-level-item>dd>div {
    height: .24rem;
    line-height: .24rem;
    display: flex;
}
.comment-level-item>dd>div:first-child {
    margin-bottom: .08rem;
}
.comment-level-item>dd>div>img {
    margin-left: .15rem;
    margin-top: .02rem;
    width: .2rem;
    height: .2rem;
}
.comment-tab-menu {
    padding: .2rem 0;
    border-top: .01rem solid #d8d8d8;
    border-bottom: .01rem solid #d8d8d8;
    background: #fff;
    display: flex;
    justify-content: center;
}
.comment-tab-menu>ul {
    border: .01rem solid #ff8000;
    border-radius: .06rem;
    display: flex;
    width: 2rem;
}
.comment-tab-menu>ul>li {
    display: inline-block;
    min-width: 1rem;
    height: .32rem;
    padding: 0 .05rem;
    line-height: .32rem;
    color: #ff8000;
    text-align: center;
}
.comment-tab-menu>ul>li.active {
    background: #ff8000;
    color: #fff;
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
</style>