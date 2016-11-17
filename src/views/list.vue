<template>
  <div class="cell_container">
    <Cell v-for="x in page"></Cell>
  </div>
</template>

<script>
  import Cell from '../components/Cell'
  export default {
    data () {
      return {
        page: 3
      }
    },
    components: {
      Cell
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cell_container{
    border-top: .1rem solid rgba(133, 133, 133, 0.44);
    border-bottom: .1rem solid rgba(133, 133, 133, 0.44);
    padding: 0 .8rem;
    background-color: #fff;
  }
</style>

