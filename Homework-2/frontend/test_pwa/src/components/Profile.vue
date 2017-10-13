<template>
  <div class="profile">
    <div class="profile-image" />
    <h1>{{ loggedUser.firstName }} {{ loggedUser.lastName }}</h1>
    <h4>Following: {{ loggedUser.numOfFollowing }}   |   Followers: {{ loggedUser.numOfFollowers }}</h4>
    <ul>
      <li v-for="tweet in tweets">        
        <div class ="tweet">
          <div class="left">
            <img v-bind:src="tweet.profile_image_url_https">
          </div>

          <div class="right">
            <div>{{ tweet.screen_name }}</div>
            <span>{{ tweet.text }}</span>            
            <div class="rightFooter">
              <button v-on:click="greet(tweet.id_str)" class="btRetweet">Retweet</button>
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
        firstName: '[FirstName]',
        lastName: '[LastName]',
        numOfFollowing: '240',
        numOfFollowers: '10',
      },
      tweets : [{
          id_str: "123456780",
          screen_name: '@John1',
          profile_image_url_https: "http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-16.png",
          text: 'This is my tweet12This is my tweet121111This is my tweet12This is my tweet121111This is my tweet12This is my tweet121111This is my tweet12This is my tweet121111',
        },
        {
          id_str: "98765",
          screen_name: '@John2',
          profile_image_url_https: "http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-16.png",
          text: 'This is my tweet2',
        },
        {
          id_str: "44438765",
          screen_name: '@John3',
          profile_image_url_https: "http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-16.png",
          text: 'This is my tweet3',
        },
      ]
    }
  },
  methods: {
    greet: function(msg) {
        // `this` inside methods points to the Vue instance
        alert('Hello! Tweet ID=' + msg)      
      }
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




.btRetweet {  
  float:right;
}

img {
    max-width: 100%;
    max-height: 100%;
}
.left {
  display: block;
  //background-color: rgba(1,1,0,.5);
  width:40px;
  height:40px;
  float:left;
  overflow: hidden;
}
.right {
  background-color: gray;
  width:auto;
  height:auto;
  text-align: left;
  margin-left: 40px;
}
.rightFooter {
  background-color: yellow;
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
