<!-- Created by Renato -->
<template>
  <div id="app">
    <header>
      <span>LGHR Twitter API</span>
      <div class="header-menu">
        <router-link v-bind:to="'/'">Home</router-link>
        <!-- <router-link v-if="isLoggedUser() == false" v-bind:to="'/Login'">Login</router-link> -->
        <router-link v-if="isLoggedUser()" v-bind:to="'/ShowFollowing'">Show Following</router-link>
        <router-link v-if="isLoggedUser()" v-bind:to="'/ShowFollowers'">Show Followers</router-link>
        <router-link v-if="isLoggedUser()" v-bind:to="'/ShowFavorites'">Show Favorites Tweets</router-link>
        <router-link v-if="isLoggedUser()" v-bind:to="'/PostTweet'">Post Tweet</router-link>
        <router-link v-if="isLoggedUser()" v-bind:to="'/Search'">Search Tweet</router-link>
        <router-link v-if="isLoggedUser()" v-bind:to="'/SearchPlace'">Search Place</router-link>
      </div>
      <div class="header-logout">
        <router-link v-if="isLoggedUser()" v-bind:to="'/Logout'">Logout</router-link>
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
  name: 'app',
  data () {
    return {
      //isLoggedUser: false
    }
  },
   methods: {
     isLoggedUser: function() {
        return (this.$session.get('token') != undefined)
     },

   }
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

  width: 800px;
  margin-left: auto;
  margin-right: auto;
  //background-color: white;
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

a:link {
    color: white;
}

a:visited {
    color: white;
}

a:hover {
    color: blue;
}

a:active {
    color: black;
}

</style>
