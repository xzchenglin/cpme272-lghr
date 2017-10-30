<!-- Created by Renato -->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Validating Token...'
    }
  },
  methods:{
        GoToRoute(){
          this.$router.push("/Profile")
          //this.$router.push({ name: 'Paramdetails', params: { id: this.UserInput }})
        }
  },
  beforeCreate() {
    console.log("Home | beforeCreated")

  },

  created(){

    console.log("Home | Created")


    var queryToken = this.$route.query.token
    //var savedToken = localStorage.getItem('token')
    var savedToken = this.$session.get('token')
    console.log("queryToken=" + queryToken)
    console.log("savedToken=" + savedToken)

    if(queryToken==undefined && savedToken==undefined){
        console.log("user don't have token. Redirecting him to Login")
        this.$router.push("/Login")
        return
    }



    if (queryToken) {
      //localStorage.set('token', queryToken)
      this.$session.set('token',queryToken)
      var tokenSecret = this.$route.query.tokenSecret
      console.log("tokenSecret=" + tokenSecret)
      this.$session.set('tokenSecret',tokenSecret)
    }

    this.$router.push("/Profile")


  },
  mounted(){
    console.log("Home | mounted")
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
