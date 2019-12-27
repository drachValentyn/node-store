import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import UserList from '@/components/UserList'
import CreateUser from '@/components/CreateUser'
import EditUser from '@/components/EditUser'
import ShowUser from '@/components/ShowUser'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/show-user/:id',
    name: 'ShowUser',
    component: ShowUser
  },
  {
    path: '/add-user',
    name: 'CreateUser',
    component: CreateUser
  },
  {
    path: '/edit-user/:id',
    name: 'EditUser',
    component: EditUser
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router

