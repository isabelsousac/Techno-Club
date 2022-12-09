import Vue from "vue";
import FlashMessage from "@smartweb/vue-flash-message";
import "vue-flash-message/dist/vue-flash-message.min.css";

Vue.use(FlashMessage, {
  name: String,
  tag: String,
  time: Number,
  strategy: String,
});
