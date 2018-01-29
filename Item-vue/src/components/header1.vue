<template>
  <header>
    <div class="header">
            <div class="position">
              <div id="arri-time">
                <img src="https://huodongjd1.fruitday.com/sale/appxx/ci_20171025_1.png" title="">
              </div><div id="map">沙河镇</div>
              <i class="iconfont"></i>
            </div>
            <i class="iconfont icon-searchpage">&#xe641;</i>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header1',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{width: 100%;height: .37rem}
  .header{
   height:.37rem;width: 100%;display: flex;font-size: 0.16rem;color: #65a032;line-height: .36rem;
    box-shadow: 0 0.03rem 0.03rem 0 rgba(0,0,0,.2);position: fixed;top: 0;left: 0;z-index: 99;
    background: #fff;
  }
  .position{
    color: #65a032;
    margin: 0 0 0 .16rem;
    width: 70%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
  }
  .position img {
    width: .51rem;
    height: .14rem;
    margin-right: .05rem;
}
 #map {
    width: auto;
    max-width: 70%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.icon-searchpage {
    width: .36rem;
    height: .36rem;
    text-align: right;
    font-size: .19rem;
    color: #3a3a3a;
    display: block;
}
</style>
