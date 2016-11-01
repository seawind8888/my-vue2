<template>
  <div id="app">
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <div class="wrap">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="less">

  body {
    background-color: #fbf9fe;
  }
  .wrap {
    margin-top: 100px;
  }
</style>
<script>
  import Navbar from './components/Navbar'
  import Sidebar from './components/Sidebar'
  export default{
    components: {
      Navbar,
      Sidebar
    }
  }
</script>

