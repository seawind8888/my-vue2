<template>
  <div class="tabbar">
    <ul>
      <li v-for="nav in Navlist">
        <router-link :to="nav.path">
          <div class="tabbar_item">
            <div :class="nav.class_item"></div>
            <span v-html="nav.page"></span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="less">
  @import '../styles/TabBar.less';
</style>
<script>
  export default{
    data () {
      return {
        Navlist:
          [{page: '首页', path: '/', class_item: 'home'}, {page: '组件', path: '/components/foo', class_item: 'components'}, {page: '关于', path: '/info', class_item: 'info'}]
      }
    }
  }
</script>
