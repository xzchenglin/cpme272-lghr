<!-- Created by Renato -->
<template>
  <div>
    <input v-model="latitude" placeholder="Enter latitude"> <input v-model="longitude" placeholder="Enter longitude"> <button v-on:click="onSearch()">Go</button>
    <br />
    or
    <br />
    <button class="buttonSJC" v-on:click="onSearch(true)">Look near San Jose Airport</button>
    <br />
    <br />
    <div class="response">
      <table v-if="resultData != false" >
      <thead>
        <tr>
          <th v-for="key in columns">
            {{ key }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entry in resultData">
          <td v-for="key in columns">
            {{entry[key]}}
          </td>
        </tr>
      </tbody>
    </table>

    </div>
  </div>
</template>





<script>
export default {
  name: 'searchPlace',
  data () {
    return {
      columns: ["name","type","country"],
      latitude: "",
      longitude: "",
      resultData: false,
    }
  },
  methods: {
    onSearch: function(searchInSJC) {
        console.log("Going to search for place")


        var data = {
        }

        if (searchInSJC == undefined) {
            data = {
              latitude: this.latitude,
              longitude: this.longitude,
          }
        }



        this.resultData = false;
        this.lghrAPIRequest(this, "nearby", data, "POST",
        function(data, vueObj) { // on success
          console.log("on sucess")
          console.log(data);

          vueObj.resultData = data.value;
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



.buttonSJC {

  border:none;
  width:228px;
  height:28px;
  cursor: pointer;
}




table {
  margin-right: auto;
  margin-left: auto;
  border: 2px solid rgba(123,20,20,0.66);
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: rgba(123,20,20,0.66);
  color: rgba(255,255,255,0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th, td {
  min-width: 120px;
  padding: 10px 20px;
}


</style>
