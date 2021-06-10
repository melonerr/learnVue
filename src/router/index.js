import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import intro from '../views/intro.vue'
import computed from '../views/computed.vue'
import binding from '../views/binding.vue'
import form from '../views/form.vue'
import modifier from '../views/modifier.vue'
import component from '../views/component.vue'
import slot from '../views/slot.vue'
import Condition from '../views/ConditionDirective.vue'
import LifecycleHooks from '../views/LifecycleHooks.vue'
import NormalState from '../views/NormalState.vue'
import Ref from '../views/Ref.vue'
import filter from '../views/Filter.vue'
import CORS from '../views/CORS.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/intro',
    name: 'intro',
    component: intro
  },
  {
    path: '/computed',
    name: 'computed',
    component: computed
  },
  {
    path: '/binding',
    name: 'binding',
    component: binding
  },
  {
    path: '/form',
    name: 'form',
    component: form
  },
  {
    path: '/modifier',
    name: 'modifier',
    component: modifier
  },
  {
    path: '/component',
    name: 'component',
    component: component
  },
  {
    path: '/slot',
    name: 'slot',
    component: slot
  },
  {
    path: '/Condition',
    name: 'Condition',
    component: Condition
  },
  {
    path: '/LifecycleHooks',
    name: 'LifecycleHooks',
    component: LifecycleHooks
  },
  {
    path: '/NormalState',
    name: 'NormalState',
    component: NormalState
  },
  {
    path: '/ref',
    name: 'ref',
    component: Ref
  },
  {
    path: '/filter',
    name: 'filter',
    component: filter
  },
  {
    path: '/CORS',
    name: 'CORS',
    component: CORS
  }
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
