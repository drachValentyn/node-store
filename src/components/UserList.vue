<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col cols="8">
        <v-card
          class="pa-2"
          outlined
          tile
        >

          <v-simple-table>
            <h2>User List</h2>
            <template v-slot:default>
              <thead>
              <tr>
                <th class="text-center">Name</th>
                <th class="text-center">Login</th>
                <th class="text-center">E-mail</th>
                <th class="text-center">Date</th>
                <th></th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="user in users" :key="user._id" class="text-center">
                <td>{{ user.name }}</td>
                <td>{{ user.login }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.date }}</td>
                <td>
                  <v-btn small
                         color="primary"
                         @click.stop="details(user._id)"
                  >Edit User</v-btn>
                </td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import axios from 'axios'

export default {
  name: 'UserList',
  data () {
    return {
      fields: {
        name:  'Name',
        login:  'Login',
        email: 'Email',
      },
      users: [],
      errors: []
    }
  },
  created () {
    axios.get(`http://localhost:4002/user`)
      .then(response => {
        this.users = response.data;
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods: {
    details (userid) {

      this.$router.push(`/show-user/` + userid);
      // this.$router.push({
      //   name: 'ShowUser',
      //   params: { id: user }
      // })
    }
  }
}
</script>

<style scoped>

</style>
