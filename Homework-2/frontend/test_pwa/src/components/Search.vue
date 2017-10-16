<!-- Created by Yu Xu -->
<template>
  <div class="login">    
    <!-- add here the SSO login button -->

  <input v-model="keyword" placeholder="Enter word, username,.... ">  <button v-on:click="onSearch()">Go</button>
  </div>
</template>




<script>
export default {
  name: 'login',
  data () {
    return {
      keyword: ""
    }
  },  
  methods: {
    onSearch: function() {
        console.log("Going to search for: " + this.keyword)

        var options = {
            keyword: this.keyword,
        }
        this.lghrAPIRequest(this, "Search", options, "GET")
    },    

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


input {
  height: 30px;
  width: 200px;
}
button {
  
  border:none;
  width:28px;
  height:28px;
  cursor: pointer;
}


</style>
