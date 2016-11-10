<template>
  <div @click="test" class="list">
  </div>
</template>

<script>
  export default {
    ready () {
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .list{
    width: 100%;
    height: 5rem;
    border: .2rem solid black;
    background: rgba(255, 74, 45, 0.87);
  }
</style>

