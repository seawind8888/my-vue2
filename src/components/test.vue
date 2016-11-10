<template>
  <div id="demo">
    <h1>{{msg}}</h1>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      data_props: {}
    },
    data () {
      return {
        msg: this.data_props
      }
    },
    ready () {
      console.log(this.$el.offsetHeight)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    color: #42b983;
  }
</style>

