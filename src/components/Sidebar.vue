<template>
    <div class="nav" v-show="show">
      <ul>
        <li v-for="nav in Navlist">
          <router-link :to="nav.path"><span>{{nav.name}}</span></router-link>
        </li>
      </ul>
    </div>
</template>
<style>
    body{
      background-color: #ffffff;
    }
    .nav{
      position: absolute;
      top:50px;
      bottom: 0;
      left: 0;
      right: 200px;
      background: #282828;
    }
    .nav ul{
      margin: 0;
      padding: 0;
    }
  .nav li{
    list-style: none;
    height: 50px;
    border: 1px solid #363636;
    line-height: 50px;
    box-sizing: border-box;
    padding-left: 20px;
  }
    .nav li a{
      color: #ffffff !important;
      font-size: 14px;
      text-decoration:none;
    }
</style>
<script>
    import { mapGetters } from 'vuex'
    export default{
      computed: mapGetters({
        show: 'getLeftSideState'
      }),
      data () {
        return {
          Navlist: [{name: '首页', path: '/'}, {name: '发现', path: '/find'}, {name: '列表', path: '/list'}, {name: '我的', path: '/user'}]
        }
      }
    }
</script>
