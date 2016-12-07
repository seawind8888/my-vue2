const Index = resolve => () => {
  resolve(require('./views/index.vue'))
}

const List = resolve => () => {
  resolve(require('./views/list.vue'))
}

const Info = resolve => () => {
  resolve(require('./views/info.vue'))
}

const routers = [{
  path: '/',
  name: 'index',
  component: Index
}, {
  path: '/list',
  name: 'list',
  component: List
}, {
  path: '/info',
  name: 'info',
  component: Info
}, {
  path: '*',
  component: Index
}]

export default routers

