<template>
  <div id="demo">
    <h1 v-html="msg"></h1>
    <test v-ref:child :data_props="abc">
      <testA :data_props="323123"></testA>
    </test>
  </div>
</template>

<script>
  import test from '../components/test'
  import testA from '../components/testA'
  export default {
    data () {
      return {
        msg: 'Hello index!',
        abc: 123321
      }
    },
    components: {
      test,
      testA
    },
    ready () {
      this.tests()
    },
    methods: {
      tests: function () {
        console.log(this.$refs.child)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    color: #42b983;
  }
</style>

