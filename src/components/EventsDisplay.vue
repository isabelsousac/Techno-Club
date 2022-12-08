<template>
  <div class="events">
    <img src="https://i.imgur.com/79OkbeH.png" />
    <img src="https://i.imgur.com/htnaprZ.png" />
    <img src="https://i.imgur.com/zVHtw8s.png" />
    <img src="https://i.imgur.com/fflz42c.png" />
  </div>
</template>

<script>
export default {
  name: "EventsDisplay",
};
</script>

<style scoped>
.events {
  display: flex;
  flex-wrap: wrap;
  width: 75vw;
  flex-flow: row wrap;
  gap: 10px;
}
</style>
