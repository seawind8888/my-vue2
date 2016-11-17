<template>
    <div class="tabbar_item">
      <img :src="img">
    </div>
</template>
<style>
    .tabbar_item{
    }
</style>
<script>
  export default{
    data () {
      return {
        img: this.data_props
      }
    },
    components: {
      Tabbar,
    }
  }
</script>
