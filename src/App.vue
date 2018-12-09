<template>
  <div id="app">
      <div class="nav">
          <!-- <router-link class="btn" to="/">回到首页</router-link> -->
          <router-link class="btn" to="/admin">管理员页面|||</router-link>
          <router-link class="btn" to="/user">普通用户页面|||</router-link>
      </div>    
      <div>
          <button @click="addadminroutes">注入管理员路由表</button>
          <button @click="adduserroutes">注入普通用户路由表</button>

      </div>
    <router-view/>
  </div>
</template>
<script>
import VueRouter from 'vue-router';
import home from './views/Home.vue'
import admin from './views/admin.vue'
import error from './views/error.vue'
import user from './views/user.vue'

export default {
  methods :{
    resetrouter(){
      let newrouter = new VueRouter({
        routes :  [
          {
            path : '/',
            name : "home",
            component : home
          },
        ]
      })
      this.$router.matcher = newrouter.matcher;
    },
    addadminroutes(){
      this.resetrouter()
      this.$router.addRoutes([
        {
          path : '/admin',
          name : 'admin',
          component : admin
        },
        {
          path : '*',
          name : 'error',
          component : error
        }
      ])
    },
    adduserroutes(){
      this.resetrouter()
      this.$router.addRoutes([
        {
          path : '/user',
          name : 'user',
          component : admin
        },
        {
          path : '*',
          name : 'error',
          component : error
        }
      ])
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
