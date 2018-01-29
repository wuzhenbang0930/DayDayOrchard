<template>
  <div id="app">
    
    <router-view class="mains" />
    
  </div>
</template>

<script>


export default {
  name: 'App',

}
</script>

<style>
@import url("./assets/css/iconfont.css");
*{
  margin: 0; padding: 0;box-sizing: border-box;
}

html,body{
   width: 100%; 
}
 a{text-decoration:none;}
 li{list-style: none;}
 img{border:0;}
html{
  font-size:31.25vw; 
}
#app{display: flex;flex-direction: column;height: 100%;width: 100%; flex-wrap: wrap}
.mains{
  flex:1;
  width: 100%;
  height: 100%;

}
</style>
