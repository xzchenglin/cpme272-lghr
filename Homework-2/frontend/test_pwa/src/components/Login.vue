<!-- Created by Yu Xu -->
<template>
  <div class="login">    
    <!-- add here the SSO login button -->
  <button v-on:click="loginTwitter()">Login with Twitter</button>
  </div>
</template>




<script>
export default {
  name: 'login',
  data () {
    return {
      loggedUser:{
        name: 'John Doe',
        friends_count: '240', // following
        followers_count: '10', // followers
        id_str: ''
      },      
    }
  },  
  methods: {
    loginTwitter: function(msg) {
        // add here code that call the Twitter API to login
    },    

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}





a {
  color: #35495E;
}
</style>
