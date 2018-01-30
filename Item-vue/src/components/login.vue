<template>
  <div class="section">
    <nav>
      <div class="ppo">
        
        <a href="###" class="iconfont icon-xiangzuo"></a>
        
      </div>
      <div class="nav2">
        <span>手机号快捷登录</span>
      </div>
    </nav>
    <section>
     
        <div class="box">
          <div class="box1">
          	<i class="iconfont icon-shouji"></i>
          	<input type="text" name="" id="" placeholder="手机号"/>
          
          </div>
          
          <div class="box1">
          	<i class="iconfont icon-yuechi"></i>
          	<input type="text" name="" id=""  placeholder="短信验证码"/>
          	
          </div>
          
       
          
          <a href="javascript:;" class="btn-login dis" id="mobile-login-btn">登录</a>
          
       
       
          
        </div>
    </section>
  </div>
  
</template>
<script>
  export default {
    name: 'login',
    data () {
      return {
        
      }
    }
  }
</script>

<style scoped>
  .section{background:url(../assets/login-bg.png) no-repeat 0 0;background-size:100% auto;height:100%;font-size:.17rem; width: 100%}
  nav{width:100%;position: fixed;top: 0;left: 0;height:.45rem;line-height: .43rem;color:#75a739;display: flex;}
  .ppo{width:.88rem;color: #76a741;display: inline-block;}
  .icon-xiangzuo{
    text-align: center;
    padding-left: .07rem;
  }
  .ppo a{ width: .4rem;
    color: #75a739;
    display: inline-block;
    font-size: .22rem;
}
  .nav2{
  width:50%;text-align: center;
    font-size: .17rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .nav2 span{
  align-self: center;
    font-size: .15rem;
    white-space: nowrap;
  }
  section{
    flex: 1; height: 100% ; justify-content: center; display: flex; align-items: center
  }
  section .box{
    width: 84%; padding: 0 8%; height: 2.55rem/* 255px */;
  }
  section .box1{
  	height:0.42rem;border-bottom: 1px solid #666666;line-height: 0.42rem;width:100%;display: flex;
  }
  section .box1 i{
  	height:0.25rem;width:0.22rem;font-size:.22rem;
  }
  section .box1 input{
  	background:0 0;border:none;font-size:.14rem;color:##878787;width:1.2rem;height:0.42rem;padding-left: 0.1rem;width:100%;
  }

  section .btn-login{
  	background: #bfbfbf;    display: block;
    width: 100%;
    height: .4rem;
    margin: .5rem 0 .15rem;
    border-radius: .02rem;
    
    line-height: .4rem;
    font-size: .16rem;
    color: #fff;
    text-align: center;
  }
  
</style>
