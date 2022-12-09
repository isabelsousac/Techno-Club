<template>
  <table id="info" class="ui celled compact table">
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(user, i) in users" :key="i">
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.email }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>

<script>
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";

export default {
  name: "AdminPage",
  data() {
    return { users: [] };
  },
  async mounted() {
    const querySnapshot = await getDocs(collection(db, "User"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // const data = doc.data();
      console.log("line", doc.data().user);
      const user = doc.data().user;
      if (user && user.email) {
        this.users.push(user);
      }
    });
  },
};
</script>
