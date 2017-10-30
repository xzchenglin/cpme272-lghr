<!-- Created by Yu Xu -->
<template>
  <div>
    <input v-model="message" placeholder="Enter your tweet here">  <button v-on:click="onTweet()">Tweet!</button>
    <br />
    <span>Num of chars left: {{ numCharsLeft }}</span>
  </div>
</template>





<script>
export default {
  name: 'postTweet',
  data () {
    return {
      message: ""
    }
  },
  computed: {
    // a computed getter
    numCharsLeft: function () {
      // `this` points to the vm instance
      return 140 - this.message.length;
    }
  },
  methods: {
    onTweet: function() {
        console.log("Going to tweet for: " + this.message)

        if (this.message == "") {
          alert("A tweet message is required");
          return
        }
        if (this.numCharsLeft < 0) {
          alert("Your tweet must have 140 characters or less.");
          return
        }


        var data = {
            status: this.message,
        }


        this.lghrAPIRequest(this, "tweet", data, "POST",
        function(responseData, vueObj) { // on success
          console.log("on success")
          console.log(responseData);
          console.table(responseData);

          alert("Tweeted with success!")
          vueObj.message = "";

        },
        function(error) {  // on error
          console.log("on error")
          console.log(error);
          alert("Tweet failed :(")
        })
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

span {
  height: 30px;
  width: 200px;
}

input {
  height: 30px;
  width: 300px;
}
button {

  border:none;
  width:60px;
  height:28px;
  cursor: pointer;
}



</style>
