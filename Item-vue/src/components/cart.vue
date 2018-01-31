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

		<!-- <div class="line-wrapper" v-for="item in $store.state.cart">
		  <div class="line-scroll-wrapper">
		    <div class="line-normal-wrapper">
		      <div class="line-normal-left-wrapper">
		        <div class="line-normal-avatar-wrapper">
		        	<img :src="item.templatePhoto[0].middle_image"/>
		        </div>
		        <div class="line-normal-info-wrapper">
		          <div class="line-normal-user-name">{{item.productInfo.product_name}}</div>
		          <div class="line-normal-msg"><span>{{item.productItem[0].volume}}</span></div>
		          <div class="line-normal-time">
		          	<span class="price"><small>￥</small><em>{{item.productInfo.price}}</em></span>   <span class="tag" style="background: #FF8000;color: #fff"> 明日达  </span> 
		          </div>
		        </div>
		      </div>
		      <div class="line-normal-icon-wrapper">
		      	<span class="minus">
		      		<i class="icon-jian">-</i>
		      	</span> 
		      	<span class="num">1</span> 
		      	<span class="plus">
		      		<i class="icon-searchplus">+</i>
		      	</span>
		      </div>
		    </div>
		    <div class="line-btn-delete"><button>删除</button></div>
		  </div>
		</div> -->
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
      <indexfoot></indexfoot>
	</div>
</template>
<script>
    import indexfoot from './footer1'
	export default{
		name:"cart",
		data:function(){
			return{

			}
		},
		mounted(){

		},
        components:{
            indexfoot,
        }
	}



</script>

<style scoped>

.top{height:.5rem;background: #fff;color: #75a739;font-size: .16rem;border-bottom: .01rem solid #d8d8d8;}
.redact{font-size: .12rem!important;}
.specific {
    height: .4rem;
    padding: 0 0.1rem;
    font-size: .14rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #d8d8d8;
    line-height: .4rem;
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
</style>