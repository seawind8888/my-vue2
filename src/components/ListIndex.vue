<template>
  <ul>
    <li v-for="x in cell_item">
      <router-link :to="x.path">
        <span>{{x.list_item}}</span>
      </router-link>
    </li>
  </ul>
</template>
<style>
</style>
<script>
  export default{
    data () {
      return {
        cell_item: [{path: '/components/foo/button', list_item: 'Button'}, {path: '/components/foo/alert', list_item: 'Alert'}]
      }
    }
  }
</script>
