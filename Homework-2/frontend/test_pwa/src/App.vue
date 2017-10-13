<template>
  <div id="app">
    <header>
      <span>LGHR Twitter API</span>
      <div class="header-menu">
        <router-link v-bind:to="'/'">Hello</router-link>
        <router-link v-bind:to="'/Home'">Home</router-link>
        <router-link v-bind:to="'/Tweet'">Tweet</router-link>
        <router-link v-bind:to="'/Search'">Search</router-link>
      </div>
      <div class="header-logout">
        <router-link v-bind:to="'/Logout'">Logout</router-link>
      </div>
      
    </header>
    <main>
      <!-- <img src="./assets/logo.png" alt="Vue.js PWA"><br /> -->       
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

.header-menu {
  
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  background-color: black;
  text-align: center;
}

.header-logout {
  float:right;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #861414;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
  float: left;
}
</style>
