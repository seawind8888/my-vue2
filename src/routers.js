export default [{
  path: '/',
  name: 'index',
  component: require('./views/index')
}, {
  path: '/list',
  name: 'list',
  component: require('./views/list')
}, {
  path: '/info',
  name: 'info',
  component: require('./views/info')
}, {
  path: '*',
  component: require('./views/index')
}]
