<template>
  <div class="main">
    <a @click="showside" class="item_container">
      <img src="../assets/list.png" />
    </a>
      <span>
      你好商城
    </span>

  </div>
</template>

<script>
  export default{
    methods: {
      showside () {
        this.$store.dispatch('changeLeftSideState', true)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
    position: fixed;
    height: 50px;
    background: #282828;
    border: 1px dotted #333;
    top: 0;
    left: 0;
    right: 0;
    color: #ffffff;

  }
  .main img{
    height: 25px;
  }
  .main span{
    position: relative;
    bottom: 5px;
    font-size: 16px;
    display: inline-block;
    left: 10px;
  }
  .item_container{
    box-shadow: 1px 0 1px #363636;
    display: inline-block;
    padding: 10px;
  }
</style>
