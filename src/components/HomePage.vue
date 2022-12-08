<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

      <div>
      <b-nav small>
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
    </div>
    
  </div>
</template>

<script>
  export default {
    name: 'HomePage',
    props: {
      msg: String
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
