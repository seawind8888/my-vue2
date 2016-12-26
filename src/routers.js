
const Index = resolve => {
  require.ensure(['./views/index.vue'], () => {
    resolve(require('./views/index.vue'))
  })
}

const List = resolve => {
  require.ensure(['./views/list.vue'], () => {
    resolve(require('./views/list.vue'))
  })
}

const Info = resolve => {
  require.ensure(['./views/info.vue'], () => {
    resolve(require('./views/info.vue'))
  })
}

const routers = [{
  path: '/',
  component: Index
}, {
  path: '/list',
  component: List
}, {
  path: '/info',
  component: Info
}, {
  path: '*',
  component: Index
}]

export default routers

