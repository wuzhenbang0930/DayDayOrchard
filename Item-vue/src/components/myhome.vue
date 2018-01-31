<template>
    <div class="section">
      <div class="header">
          <div class="name">

            <div class="imgs"></div>
            <h2>
              13888888888
              <span>签到送好礼</span>
            </h2>
            <i class="iconfont icon-msnui-qr-code"></i>

          </div>
          <ul>
            <li>
              <span>积分</span>
              <span>0</span>  
            </li>
            <li><span>积分</span>
              <span>0</span>  </li>
            <li><span>积分</span>
              <span>0</span>  </li>
            <li><span>积分</span>
              <span>0</span>  </li>
          </ul>
      </div>
      <div class="index">
        <div class="line">
          <span>
          <i class="iconfont icon-myorder"></i>
          我的订单
        </span>
          <i class="iconfont icon-xiangyou"></i>
        </div>
        <ul>
          <li><i class="iconfont icon-fukuan"></i>待付款</li>
          <li><i class="iconfont icon-daifahuo"></i>待发货</li>
          <li><i class="iconfont icon-icon3"></i>待收获</li>
          <li><i class="iconfont icon-pingjia"></i>待评价</li>
          <li><i class="iconfont icon-tuihuanhuo"></i>退换货</li>
        </ul>
        <div class="line">
           <span><i class="iconfont icon-huiyuanzhongxin"></i>会员中心
           </span><i class="iconfont icon-xiangyou"></i></div>
        <div class="line"><span><i class="iconfont icon-qiyeshangbiao"></i>企业购</span><i class="iconfont icon-xiangyou"></i></div>
        <div class="line"><span><i class="iconfont icon-serve"></i>练习客服</span><i class="iconfont icon-xiangyou"></i></div>
      </div>
      <indexfoot></indexfoot>
    </div>
  
  
</template>
<script>
import indexfoot from './footer1'
import axios from 'axios'
  export default {
    name: 'login',
     components:{
    
    indexfoot,
  },
    data () {
      return {
        
      }
    },
   
  }
</script>

<style scoped>
  .section{background:url(../assets/login-bg.png) no-repeat 0 0;background-size:100% auto;height:100%;font-size:.17rem; width: 100%}
  .header{
    width: 100%; height: 1.9rem/* 190px */; 
  }
  .header ul{
    display: flex;justify-content: space-around; text-align: center
  }
  .header ul li span{
    display: block
  }
  .index ul{
    display: flex; justify-content: space-between; text-align: center; font-size: .14rem/* 14px */; padding: .08rem/* 8px */ 0
    ;
    color: 
  }
  .index ul li i{
    display: block; width: 100%; font-size: .22rem/* 24px */ !important; margin-bottom: .05rem/* 5px */;
  }
  .line{
    display: flex; justify-content: space-between; text-align: left; height: .44rem/* 44px */; line-height: .44rem/* 44px */ ; border-bottom: .01rem/* 1px */ solid #ece9e5; background: rgba(225,225,225,.6);font-size: .14rem/* 14px */; color: #3a3a3a;
  }
  .name{
    display: flex; padding: .3rem/* 30px */ .15rem/* 15px */ .3rem/* 30px */ .2rem/* 20px */; justify-content: space-between
  }
  .imgs{
    width: .6rem/* 60px */; height: .6rem/* 60px */; background: skyblue 
  }

  .name h2  {
    display: flex; flex-direction: column ; font-size: .14rem/* 14px */; margin-left: -.9rem/* 50px */
  }
  .name h2 span{
    display: block; width: .7rem/* 70px */; height: .18rem/* 18px */; font-size: .11rem/* 11px */; color: #fff; line-height: .18rem/* 18px */; text-align: center; border-radius: .86rem/* 86px */; background: #ff8000; margin-top: .1rem/* 10px */
  }
  .name i {
    font-size: .3rem/* 30px */!important
  }
  .line  span i {
    font-size: .24rem/* 24px */ !important; margin-right: .12rem/* 12px */; color: #3a3a3a
  }

 
</style>
