<template>
  <div id="app">
    <router-view class="mains" />
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
   
  }

}
</script>

<style>
@import url("./assets/css/iconfont.css");
@import url('./assets/swiper.css');
*{
  margin: 0; padding: 0;box-sizing: border-box;
}

html,body{
   width: 100%; height: 100%
}
 a{text-decoration:none;}
 li{list-style: none;}
 img{border:0;}

html{
  font-size:31.25vw; height: 100%;
}

#app{display: flex;flex-direction: column;width: 100%;height: 100%; flex-wrap: wrap}
.mains{
  flex:1;
  width: 100%;
  height: 100%;
  overflow: auto;
}

</style>
