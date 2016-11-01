<template>
  <div class="hello">
    <h1 id="abc">{{msg}}</h1>
    <input :value='getText'>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        msg: 'Hello World111!'
      }
    },
    computed: mapGetters({
      getText: 'getText'
    })
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    color: #42b983;
  }
</style>
