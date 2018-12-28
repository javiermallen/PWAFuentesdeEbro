import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './views/Inicio.vue'
import Nosotros from './views/Nosotros.vue'
import Bando from './views/Bando.vue'
import Avisos from './views/Avisos.vue'
import Informacion from './views/Informacion.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Inicio
    },
    {
      path: '/bando',
      name: 'bando',
      component: Bando
    },
    {
      path: '/avisos',
      name: 'avisos',
      component: Avisos,
    },
    {
      path: '/informacion',
      name: 'informacion',
      component: Informacion
    },
    {
      path: '/nosotros',
      name: 'nosotros',
      component: Nosotros
    }
    
  ]
})
