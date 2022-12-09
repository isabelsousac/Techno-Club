<template>
  <div>
    <img src="https://i.imgur.com/EQW8FRE.png" class="newsBanner" />
    <div class="ui raised very padded text container">
      <h1>Newsletter</h1>
      <p>
        Be one of the first club rats to have access to the hardest music events
        and hardest drugs in the scene.
      </p>

      <h3>PERSONAL DETAILS</h3>

      <form @submit.prevent="submit">
        <p v-if="errorsPresent" class="error">Please fill out both fields</p>
        <div class="form-group">
          <label for="exampleInputPassword1">FIRST NAME</label>
          <input
            type="text"
            class="form-control"
            id="first-name"
            v-model="firstName"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">LAST NAME</label>
          <input
            type="text"
            class="form-control"
            id="last-name"
            v-model="lastName"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">EMAIL ADDRESS</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="email"
            :rules="emailRules"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">PHONE NUMBER</label>
          <input type="text" class="form-control" id="exampleInputPassword1" />
        </div>

        <h3>KEEP INFORMED</h3>

        <div class="ui segment">
          <div class="field">
            <div class="ui toggle checkbox">
              <input
                type="checkbox"
                name="events"
                tabindex="0"
                class="hidden"
              />
              <label>EVENTS</label>
            </div>
          </div>
        </div>

        <div class="ui segment">
          <div class="field">
            <div class="ui toggle checkbox">
              <input type="checkbox" name="news" tabindex="0" class="hidden" />
              <label>NEWS</label>
            </div>
          </div>
        </div>

        <div class="ui segment">
          <div class="field">
            <div class="ui toggle checkbox">
              <input
                type="checkbox"
                name="discounts"
                tabindex="0"
                class="hidden"
              />
              <label>DISCOUNTS</label>
            </div>
          </div>
        </div>

        <div class="ui segment">
          <div class="field">
            <div class="ui toggle checkbox">
              <input type="checkbox" name="covid" tabindex="0" class="hidden" />
              <label>COVID-19</label>
            </div>
          </div>
        </div>

        <h3>HOW WE'LL REACH YOU</h3>

        <div class="ui segment">
          <div class="field">
            <div class="ui toggle checkbox">
              <input
                type="checkbox"
                name="sms"
                tabindex="0"
                class="hidden"
                v-model="sms"
              />
              <label>VIA SMS</label>
            </div>
          </div>
        </div>

        <div class="ui segment">
          <div class="field">
            <div class="ui toggle checkbox">
              <input type="checkbox" name="email" tabindex="0" class="hidden" />
              <label>VIA EMAIL</label>
            </div>
          </div>
        </div>

        <div class="subscribe">
          <button type="submit" class="btn btn-primary">SUBSCRIBE</button>
          <router-link to="/policy" class="item"
            ><p>Our privacy policy</p></router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";

export default {
  data: function () {
    return {
      firstName: "",
      lastName: "",
      email: "",
      sms: false,
      errors: false,
    };
  },
  methods: {
    async submit() {
      const user = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
      };

      console.log(user);

      try {
        await addDoc(collection(db, "User"), { user });
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
h1,
h3 {
  font-family: "Iceberg", cursive;
}

.form-control {
  background: rgba(247, 247, 247, 0.115);
  height: 50px;
  color: white;
}

.ui.segment {
  background: #1e1e1e;
}

.ui.toggle.checkbox label {
  color: white;
}

p {
  font-size: 13px;
}

p[data-v-6f83b81c] {
  font-size: 16px;
}

.subscribe {
  text-align: center;
  padding-bottom: 15px;
}

.subscribe button {
  width: 208px;
  height: 52px;
  background: #f6f6f6;
  color: black;
}

.item {
  text-decoration: none;
}

.newsBanner {
  width: 100vh;
}
</style>
