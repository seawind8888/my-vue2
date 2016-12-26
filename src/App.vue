<template>
  <div id="app">
    <header></header>
    <div class="wrap">
      <router-view></router-view>
    </div>
    <TabBar></TabBar>
  </div>
</template>

<script>
  import TabBar from './components/TabBar'
  export default{
    components: {
      TabBar
    }
  }
</script>
<style>
  @import "styles/App.less";
</style>

