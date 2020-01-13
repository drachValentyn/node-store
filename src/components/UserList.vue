<template>

    <v-row>
      <v-container class="grey lighten-5" fluid>
        <v-col cols="8" class="mx-auto">
        <v-card class="pa-2" outlined>
          <v-simple-table>
            <h2>User List</h2>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">Name</th>
                  <th class="text-center">Login</th>
                  <th class="text-center">E-mail</th>
                  <th class="text-center">Date</th>
                  <th/>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user._id" class="text-center">
                  <td>{{ user.name }}</td>
                  <td>{{ user.login }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.date }}</td>
                  <td>
                    <v-btn small color="primary" @click.stop="details(user._id)"
                      >Edit User</v-btn
                    >
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>
      </v-container>
    </v-row>

</template>

<script>
import axios from "axios";

export default {
  name: "UserList",
  data() {
    return {
      fields: {
        name: "Name",
        login: "Login",
        email: "Email"
      },
      users: [],
      errors: []
    };
  },
  created() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get(`http://localhost:4002/user`)
      .then(response => {
        this.users = response.data;
      })
      .catch(e => {
        this.errors.push(e);
        if(e.response.status === 401) {
          this.$router.push('/login')
        }
      });
  },
  methods: {
    details(userid) {
      this.$router.push(`/show-user/` + userid);
    }
  }
};
</script>

<style scoped></style>
