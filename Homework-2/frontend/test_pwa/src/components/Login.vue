<!-- Created by Yu Xu -->
<template>
  <div class="login">    
    <!-- add here the SSO login button -->
  <button v-on:click="loginTwitter()"></button>
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

        // this.$http.get('http://ip.jsontest.com/').then(function(data){
        //     console.log(data.body);            

        // }, function(error) {
        //     // handle errors
        // });        



        // this.$http.get('http://module-sso.teamlghr.site/auth/twitter').then(function(data){
        //     console.log(data);            

        // }, function(error) {
        //     // handle errors
        // });


        window.location.href = "http://module-sso.teamlghr.site/auth/twitter"

    },    

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


button {
  background: url(./../assets/sign-in-with-twitter-gray.png) no-repeat;
  border:none;
  width:158px;
  height:28px;
  cursor: pointer;
}


</style>
