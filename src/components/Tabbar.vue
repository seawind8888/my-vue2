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
  .tabbar {
    position: fixed;
    width: 100%;
    height: 3.5rem;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(13, 8, 11, 0.62);
  }
  ul{
    margin: 0;
    padding: 0;
  }

  .tabbar > ul > li {
    display: inline-block;
    width: 33%;
    margin-top: .3rem;
    list-style: none;
  }

  .tabbar_item{
    margin: 0 auto;
    font-size: 1rem;
    width: 1.8rem;
    height: 3rem;
    text-align: center;
  }
  .tabbar_item>span{
    color: #ffffff;
    display: inline-block;
    margin-top: .2rem;
    font-size: .5rem;
  }
  a{
    text-decoration:none;
  }
  .home{
    width: 100%;
    height: 1.8rem;
    background:url(../img/home.png);
    background-size: 100% 100%;

  }
  .list{
    margin: 0 auto;
    width: 90%;
    height: 1.6rem;
    background:url(../img/components.png);
    background-size: 100% 100%;

  }
  .info{
    width: 100%;
    height: 1.8rem;
    background:url(../img/infomation.png);
    background-size: 100% 100%;

  }
</style>
<script>
  export default{
    data () {
      return {
        Navlist:
          [{page: '首页', path: '/', class_item: 'home'}, {page: '组件', path: '/list', class_item: 'list'}, {page: '关于', path: '/user', class_item: 'info'}]
      }
    }
  }
</script>
