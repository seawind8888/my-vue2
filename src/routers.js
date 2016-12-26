
const Index = resolve => {
  require.ensure(['./views/index.vue'], () => {
    resolve(require('./views/index.vue'))
  })
}

const Components = resolve => {
  require.ensure(['./views/components_list.vue'], () => {
    resolve(require('./views/components_list.vue'))
  })
}

const Info = resolve => {
  require.ensure(['./views/info.vue'], () => {
    resolve(require('./views/info.vue'))
  })
}

const ListIndex = resolve => {
  require.ensure(['./components/ListIndex.vue'], () => {
    resolve(require('./components/ListIndex.vue'))
  })
}

const Button = resolve => {
  require.ensure(['./components/Button.vue'], () => {
    resolve(require('./components/Button.vue'))
  })
}

const Alert = resolve => {
  require.ensure(['./components/Alert.vue'], () => {
    resolve(require('./components/Alert.vue'))
  })
}

const routers = [{
  path: '/',
  component: Index
}, {
  path: '/components/:id',
  component: Components,
  children: [
    {
      path: '/',
      component: ListIndex
    },
    {
      path: 'button',
      component: Button
    },
    {
      path: 'alert',
      component: Alert
    }
  ]
}, {
  path: '/info',
  component: Info
}, {
  path: '*',
  component: Index
}]

export default routers

