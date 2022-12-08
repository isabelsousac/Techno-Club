<template>
  <div class="ui text center aligned container">
    <p>
      <router-link to="/signup">
        <img src="https://i.imgur.com/Nbr2lla.png" class="headerimg" />
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headerimg {
  width: 50vw;
}
</style>
