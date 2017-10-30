<!-- Created by Renato -->
<template>
  <div class="profile">
    <!-- <h4>Following: {{ loggedUser.friends_count }}   |   Followers: {{ loggedUser.followers_count }}</h4> -->
    Below you can find a small list (up to 20) of users you are following
    <ul>
      <li v-for="friend in friendsList">
        <div class ="user">
          <div class="left">
            <img v-bind:src="friend.profilePic">
          </div>

          <div class="right">
            <div><b>{{ friend.screen_name }}</b></div>
            <span>{{ friend.location }}</span>
            <div class="rightFooter">
                <button v-on:click="onUnFollow(friend.screen_name)" class="btRetweet">Unfollow</button>
            </div>
          </div>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'showFollowing',
  data () {
    return {
      friendsList : [],
      title : ""

    }
  },

  created: function() {

    this.refreshScreen()


  },
  methods: {

    refreshScreen: function() {


      this.lghrAPIRequest(this, "friends", {}, "POST",
          function(responseData, vueObj) { // on success
            console.log("on success")
            console.log(responseData);

            var resultList = [];
            const dic = responseData.value
            for (var key in dic) {
                var value = dic[key]
                var newItem = {}
                newItem.screen_name = '@'+ key;
                newItem.id_str =  '' + value.id;
                newItem.profilePic = value.profilePic
                newItem.location = value.location
                if (newItem.location == undefined || newItem.location == ""){
                  newItem.location = "Unknown"
                }

                resultList.push(newItem);
            }
            vueObj.friendsList = resultList;

          },
          function(error) {  // on error
            console.log("on error")
            console.log(error);
          })


    },
    onUnFollow: function(screenName){
      var data = {
        user: screenName
      }

      this.lghrAPIRequest(this, "unfollow", data, "POST",
        function(responseData, vueObj) { // on success
          console.log("on success")
          console.log(responseData);

          vueObj.refreshScreen()

        },
        function(error) {  // on error
          console.log("on error")
          console.log(error);
        })

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
  width:40px;
  //width:0px;
  height:40px;
  float:left;
  overflow: hidden;
}
.right {
  background-color: white;
  width:300px;
  height:auto;
  text-align: left;
  margin-left: 40px;
  //margin-left: 0px;
}
.rightFooter {
  background-color: white;
  width:auto;
  height:20px;
  text-align: left;
  float:right;

}
.user{
  border-width: thin;
  border-style: solid;
  width:340px;
  height:auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom:10px;
}


</style>
