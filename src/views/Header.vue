<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>Node Store</v-toolbar-title>
    <v-spacer />
    <div v-if="auth">
      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer mr-3"
          >User List</router-link
        >
        <router-link to="/add-user" tag="span" class="pointer mr-3"
          >Add User</router-link
        >
        <router-link to="/upload" tag="span" class="pointer mr-5"
          >Upload media</router-link
        >

        <v-btn tag="span" text class="pointer 111" @click="logout()">
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </v-toolbar-title>
    </div>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      auth: ""
    };
  },
  computed: {
    ...mapGetters({
      user: "user"
    })
  },
  created() {
    this.auth = localStorage.getItem("jwtToken");
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$store.state.user = {};
      this.$router.push({
        name: "Login"
      });
    }
  }
};
</script>

<style scoped></style>
