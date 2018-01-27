<template>
  <div id="app">
    <commit-header></commit-header>
    <main1></main1>
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

</style>
