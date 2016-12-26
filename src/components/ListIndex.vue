<template>
  <ul>
    <li v-for="x in cell_item">
      <router-link :to="x.path">
        <Cell :data_props="x.list_item"></Cell>
      </router-link>
    </li>
  </ul>
</template>
<style>
  ul{
    margin: 0;
    padding:0;
    list-style: none;
    width: 100%;
  }
  li a{
    text-decoration: none;
  }
</style>
<script>
  import Cell from './Cell.vue'
  export default{
    data () {
      return {
        cell_item: [{path: '/components/foo/button', list_item: 'Button'}, {path: '/components/foo/alert', list_item: 'Alert'}]
      }
    },
    components: {
      Cell
    }
  }
</script>
