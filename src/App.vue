<template>
  <div id="app">
    <header></header>
    <div class="wrap">
      <router-view></router-view>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<style lang="less">
  body {
    background-color: #fbf9fe;
  }
  header{
    width: 100%;
    height: 2.8rem;
    background: rgba(13, 8, 11, 0.62);
  }
  .wrap{
    margin-top: 2rem;
  }
</style>
<script>
  import Tabbar from './components/Tabbar'
  export default{
    components: {
      Tabbar
    }
  }
</script>

