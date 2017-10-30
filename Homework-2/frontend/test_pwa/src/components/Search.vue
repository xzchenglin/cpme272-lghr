<!-- Created by Renato -->
<template>
  <div>
    <input v-model="keyword" placeholder="Enter word, username,.... ">  <button v-on:click="onSearch()">Go</button>
    <div class="response">
      <ul>
        <li v-for="result in searchResult">
          <div class ="tweet">
            <div class="left">
              <!-- <img v-bind:src="result.profile_image_url_https"> -->
            </div>

            <div class="right">
              <div><b>{{ result.screen_name }}</b></div>
              <span>{{ result.text }}</span>
              <div class="rightFooter">
                <button v-on:click="onReTweet(result.id_str)" class="btRetweet">Retweet</button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>





<script>
export default {
  name: 'search',
  data () {
    return {
      keyword: "",
      searchResult : [] // we start with an empty search result.
    }
  },
  methods: {
    onSearch: function() {
        console.log("Going to search for: " + this.keyword)

        if (this.keyword == "") {
          alert("A search keyword is required");
          return
        }

        var data = {
            keyword: this.keyword,
        }

      //   this.searchResult = [{
      //     id_str: "123456780",
      //     screen_name: '@John1',
      //     profile_image_url_https: "http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-16.png",
      //     text: 'This is my tweet12This is my tweet121111This is my tweet12This is my tweet121111This is my tweet12This is my tweet121111This is my tweet12This is my tweet121111',
      //   },
      // ]

        this.lghrAPIRequest(this, "search", data, "POST",
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
          vueObj.searchResult = resultList;

        },
        function(error) {  // on error
          console.log("on error")
          console.log(error);
        })
    },
    onReTweet: function(tweetId) {
        console.log("Going to search for: " + this.keyword)

        var data = {
            id: tweetId,
        }

        this.lghrAPIRequest(this, "retweet", data, "POST",
        function(responseData, vueObj) { // on success
          console.log("on success")

          alert("ReTweeted with success!")

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

.btRetweet {
  float:right;
  width:60px;
  height:20px;
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
