<template>
  <div class="cell_container">
    <Cell v-for="x in cell_item" :data_props="x.list_item"></Cell>
  </div>
</template>

<script>
  import Cell from '../components/Cell'
  export default {
    data () {
      return {
        cell_item: [{list_item: '列表'}, {list_item: '按钮'}, {list_item: '计数器'}]
      }
    },
    components: {
      Cell
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .cell_container {
    border-top: .1rem solid rgba(133, 133, 133, 0.44);
    border-bottom: .1rem solid rgba(133, 133, 133, 0.44);
    padding: 0 .8rem;
    background-color: #fff;
  }
</style>

