<template>
  <div id="app">
    <div class="ui inverted segment navbar">
      <div class="ui center aligned container">
        <div class="ui large secondary inverted pointing menu compact">
          <router-link to="/" exact class="item">
            <i class="home icon" /> Home
          </router-link>
          <router-link to="/signup" class="item">
            <i class="newspaper outline icon" /> Newsletter
          </router-link>
        </div>
      </div>
    </div>

    <div class="ui text container">
      <flash-message class="myFlash"></flash-message>
      <div class="ui one column grid">
        <div class="column">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
export default {
  name: "app",
};
</script>
