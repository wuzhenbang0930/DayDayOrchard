<template>
  <div id="app">
    <commit-header></commit-header>
    <router-view class="mains" />
    <commit-footer></commit-footer>
  </div>
</template>

<script>
import HelloWorld1 from './components/HelloWorld'
export default {
  name: 'App',
  components: {
    main1 : HelloWorld1
  }
}
</script>

<style>
@import url("./assets/css/iconfont.css");

*{
  margin: 0; padding: 0
}
html,body{
  height: 100%; width: 100%; display: flex; box-sizing: border-box; list-style: none ;flex-direction: column; 
}
html{
  font-size:31.25vw;
}
#app{display: flex;flex-direction: column;width: 100%;height: 100%}
.mains{
  flex:1;
  background: blue;
  width: 100%;
}
</style>
