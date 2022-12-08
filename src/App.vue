<template>
  <div id="app">
    <div class="ui inverted segment navbar">
      <div class="ui large secondary inverted pointing menu compact">
        <router-link to="/" exact class="item">
          <i class="home icon" /> Home
        </router-link>
        <router-link to="/signup" class="item">
          <i class="newspaper outline icon" /> Newsletter
        </router-link>
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
  background-color: #1e1e1e;
  color: white;
}

body {
  background-color: #1e1e1e;
}
#image {
  width: 100vw;
  height: 23vw;
  background: url(https://i.imgur.com/Vao4LFW.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: -17px;
  border-bottom: 0.5em solid white;
}

div.ui.inverted.segment {
  background: black;
  padding: 0 auto;
  height: 8vh;
}

div.ui.secondary.pointing.menu.item a {
  text-align: center;
}

.border {
  position: absolute;
  width: 100vw;
  height: 9px;
  left: 0px;
  top: 45%;
  background: #f7f7f7;
}

div.ui.text.container {
  height: 100vh;
  margin-top: 20px;
}
</style>

<script>
export default {
  name: "app",
};
</script>
