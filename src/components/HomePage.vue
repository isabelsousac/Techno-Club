<template>
  <div>
    <div class="ui text center aligned container">
      <p>
        <router-link to="/signup">
          <img src="https://i.imgur.com/Nbr2lla.png" class="headerimg" />
        </router-link>
      </p>
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
.headerimg {
  display: flex;
  height: 31vw;
}
</style>
