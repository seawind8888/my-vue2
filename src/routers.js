export default [{
  path: '/',
  name: 'index',
  component: require('./views/index')
}, {
  path: '/find',
  name: 'find',
  component: require('./views/find')
}, {
  path: '/list',
  name: 'list',
  component: require('./views/list')
}, {
  path: '/user',
  name: 'user',
  component: require('./views/user-center')
}, {
  path: '*',
  component: require('./views/index')
}]
