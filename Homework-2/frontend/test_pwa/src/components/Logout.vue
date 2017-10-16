<!-- Created by Renato -->
<template>  
  <span>Hi</span>
</template>

<script>
export default {
  name: 'logout',
  data () {
    return {
    }
  },
  beforeCreate: function () {
    this.$session.destroy()
    //this.localStorage.remove('token')
    this.$router.push('/')
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
