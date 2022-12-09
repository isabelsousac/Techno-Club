<template>
  <div>
    <div class="ui text center aligned container">
      <p>
        <router-link to="/signup">
          <img src="https://i.imgur.com/Nbr2lla.png" class="headerimg" />
        </router-link>
      </p>
      <h1>What's On</h1>
      <p>
        <EventsDisplay />
      </p>
    </div>
  </div>
</template>

<script>
import EventsDisplay from "./EventsDisplay";
export default {
  name: "HomePage",
  props: {
    msg: String,
  },
  components: {
    EventsDisplay: EventsDisplay,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Iceberg&display=swap");

.headerimg {
  display: flex;
  height: 31vw;
}

h1 {
  font-family: "Iceberg", cursive;
  text-align: left;
}
</style>
