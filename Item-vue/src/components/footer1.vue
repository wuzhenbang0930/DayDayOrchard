<template>
  <div class="footer">
          <router-link to="/"><i class="iconfont icon-shouye"></i>首页</router-link>
          <router-link to="/classify"><i class="iconfont icon-leimupinleifenleileibie"></i>分类</router-link>
          <router-link to="/cart"><i class="iconfont icon-gouwuche"></i>购物车</router-link>
          <router-link to="/"><i class="iconfont icon-wode"></i>我的</router-link>
  </div>
</template>

<script>
export default {
  name: 'footer1',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .footer{
    height: .42rem/* 42px */;
    width: 100%;
    background: #fff;
    font-size: 12px;
    text-decoration: none;
    position: relative;
     position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
  }

  .footer a{
    display: inline-block;  text-align: center;
    text-decoration: none;color: #000;

  }
  .footer a i{
    font-size: 24px !important;
    display: inline-block;
    width: 100%
  }
</style>
