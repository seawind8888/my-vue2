<template>
  <div id="app">
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
  .wrap {
    margin-top: 5rem;
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

