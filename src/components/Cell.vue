<template>
  <div v-html="data_props" class="list">
  </div>
</template>

<script>
  export default {
    props: ['data_props'],
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
    height: 3rem;
    border-bottom: .1rem solid rgba(133, 133, 133, 0.44);
    padding: .5rem;
    box-sizing:border-box;
    background: #fff;
    line-height: 2rem;
  }
</style>

