<!-- Created by Renato -->
<template>
  <div class="profile">
    <div class="profile-image" />
    <h1><b>{{ loggedUser.name }}</b></h1>
    <!-- <h4>Following: {{ loggedUser.friends_count }}   |   Followers: {{ loggedUser.followers_count }}</h4> -->
    <ul>
      <li v-for="tweet in tweets">
        <div class ="tweet">
          <div class="left">
            <!-- <img v-bind:src="tweet.profile_image_url_https"> -->
          </div>

          <div class="right">
            <div><b>{{ tweet.screen_name }}</b></div>
            <span>{{ tweet.text }}</span>
            <div class="rightFooter">
              <button v-if="isMineTweet() == false" v-on:click="onReTweet(tweet.id_str)" class="btRetweet">Retweet</button>
            </div>
          </div>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'profile',
  data () {
    return {
      loggedUser:{
        name: '',
        friends_count: '240', // following
        followers_count: '10', // followers
        id_str: ''
      },
      tweets : []
      // tweets : [{
      //     id_str: "123456780",
      //     screen_name: '@John1',
      //     profile_image_url_https: "http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-16.png",
      //     text: 'This is my tweet12This is my tweet121111This is my tweet12This is my tweet121111This is my tweet12This is my tweet121111This is my tweet12This is my tweet121111',
      //   },
      //   {
      //     id_str: "98765",
      //     screen_name: '@John2',
      //     profile_image_url_https: "http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-16.png",
      //     text: 'This is my tweet2',
      //   },
      //   {
      //     id_str: "44438765",
      //     screen_name: '@John3',
      //     profile_image_url_https: "http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-16.png",
      //     text: 'This is my tweet3',
      //   },
      // ]
    }
  },
  // beforeCreate: function () {
  //   if (!this.$session.exists() || !this.$session.has('id_str')) {
  //     this.$router.push('/')
  //   }
  // },

  created: function() {


    this.lghrAPIRequest(this, "name", {}, "POST",
        function(responseData, vueObj) { // on success
          console.log("on success")
          console.log(responseData);

          vueObj.loggedUser.name = responseData.value

        },
        function(error) {  // on error
          console.log("on error")
          console.log(error);
        })




        this.refreshHome()


  },
  methods: {
    alertPopup: function(msg) {
        // `this` inside methods points to the Vue instance
        alert('ReTweet (ID=' + msg + ') success!')
    },
    isLoggedUser: function() {
      return true
    },
    isMineTweet: function() {
      return false
    },
    refreshHome: function(){
      this.lghrAPIRequest(this, "timeline", {}, "POST",
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
          vueObj.tweets = resultList;

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
          vueObj.refreshHome();

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
h1, h2 {
  font-weight: normal;
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


a {
  color: #35495E;
}
</style>
