<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="mx-auto pa-3" max-width="344">

          <v-card-title>
            {{ email }}
          </v-card-title>
          
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn 
              color="red lighten-2" 
              text 
              @click="LOGOUT_USER()"
            >
              Logout
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      isChangePassword: false,
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    ...mapActions(['LOGOUT_USER'])
  },
  computed: {
    ...mapGetters(['user'])
  },
  watch:{
    user(currentUser){
      this.email = currentUser.email
    }
  }
};
</script>

<style></style>
