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
    <div id="image"></div>
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

<style>
@import url("https://fonts.googleapis.com/css2?family=Iceberg&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Iceberg", cursive;
}
#image {
  width: 100vw;
  height: 48vh;
  padding: 0 0;
  background: url(https://i.ibb.co/V3ymWym/hero-banner-1.png);
  background-size: contain;
  background-repeat: no-repeat;
}

div.ui.inverted.segment {
  background: black;
  padding: 0 auto;
}

div.ui.secondary.pointing.menu.item a {
  text-align: center;
}
</style>

<script>
export default {
  name: "app",
};
</script>
