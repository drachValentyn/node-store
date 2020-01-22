<template>
  <v-app>
    <sp-header/>
    <v-content>
      <v-container>
        <router-view/>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
  import axios from 'axios'
  import {mapGetters} from 'vuex'
  import SpHeader from '@/views/Header'

  export default {
    data() {
      return {};
    },
    components: {
      SpHeader
    },
    computed: {
      ...mapGetters({
        user: 'user',
      })
    },
    created() {
      axios.defaults.headers.common['Authorization'] = localStorage.getItem(
        'jwtToken'
      );
      let getUser = JSON.parse(localStorage.getItem('newUser'));
      console.log(getUser);
      if (getUser !== null) {
        this.$store.state.user = getUser
      }
      this.auth = localStorage.getItem("jwtToken");
    }
  };
</script>


<style scoped>
.pointer {
  cursor: pointer;
}
</style>
