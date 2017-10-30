<!-- Created by Renato -->
<template>
  <div>
    {{ title }}
    <div class="response">
      <ul>
        <li v-for="tweet in tweets">
          <div class ="tweet">
            <div class="left">
              <!-- <img v-bind:src="tweet.profile_image_url_https"> -->
            </div>

            <div class="right">
              <div><b>{{ tweet.screen_name }}</b></div>
              <span>{{ tweet.text }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>





<script>
export default {
  name: 'showFavorites',
  data () {
    return {
      title: "",
      tweets:[]
    }
  },
  created: function() {
    this.refreshScreen()
  },
  methods: {
    refreshScreen: function(){
      this.lghrAPIRequest(this, "favorites", {}, "POST",
        function(responseData, vueObj) { // on success
          console.log("on success")
          console.log(responseData);
          console.table(responseData);

          var resultList = [];
          const dic = responseData.value
          for (var key in dic) {
              var value = dic[key]
              var newItem = {}
              newItem.screen_name = '@'+ key;
              newItem.id_str =  '' + value.id;
              newItem.text = value.text
              resultList.push(newItem);
          }

          if (resultList.length >= 20) {
            vueObj.title = "Below you can find a small list (up to 20) of your favorite tweets";
          } else if (resultList.length >0 ) {
            vueObj.title = "Below you can find your favorite tweets";
          } else {
            vueObj.title = "You don't have any favorite tweet";
          }

          vueObj.tweets = resultList;

        },
        function(error) {  // on error
          console.log("on error")
          console.log(error);
        })
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




ul {
  list-style-type: none;
  padding: 0;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}


img {
    max-width: 100%;
    max-height: 100%;
}
.left {
  display: block;
  //background-color: rgba(1,1,0,.5);
  //width:40px;
  width:0px;
  height:40px;
  float:left;
  overflow: hidden;
}
.right {
  background-color: white;
  width:auto;
  height:auto;
  text-align: left;
  //margin-left: 40px;
  margin-left: 0px;
}
.rightFooter {
  background-color: white;
  width:auto;
  height:20px;
  text-align: left;

}
.tweet{
  border-width: thin;
  border-style: solid;
  width:400px;
  height:auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom:10px;
}


</style>
