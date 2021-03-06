<template>
  <div>
    <v-navigation-drawer app temporary v-model="isShowDrawer">
      <v-list-item>
          <v-list-item-subtitle v-if="isLoggedUser">Logged In</v-list-item-subtitle>
          <v-list-item-subtitle v-else>You are not authorized</v-list-item-subtitle>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        nav
        dense
      >
        <v-list-item-group
          color="primary"
        >
          <v-list-item 
            v-for="link in links"
            :key="link.title"
            :to="link.url"
          >
            <v-list-item-icon>
              <v-icon v-text="link.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="link.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item 
            @click="LOGOUT_USER()"
            v-if="isLoggedUser"
          >
            <v-list-item-icon>
              <v-icon>mdi-logout-variant</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon
        @click="isShowDrawer = !isShowDrawer"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/">Home page</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn
        icon
        class="hidden-sm-and-down"
        v-for="link in links"
        :key="link.title"
        :to="link.url"
      >
        <v-icon>{{ link.icon }}</v-icon>
      </v-btn>
      <v-btn
        icon
        class="hidden-sm-and-down"
        @click="LOGOUT_USER()"
        v-if="isLoggedUser"
      >
        <v-icon>mdi-logout-variant</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      isShowDrawer: false,
    }
  },
  methods: {
    logoutUser(){
      this.$store.dispatch('LOGOUT_USER')
      this.$router.push('/')
    },
    ...mapActions(['LOGOUT_USER'])
  },
  computed: {
    ...mapGetters(['isLoggedUser', 'user']),
    links(){
      if(this.isLoggedUser){ 
        return [
          { title: 'Profile', icon: 'mdi-account-circle', url: '/profile' }
        ]
      }
      return [
        { title: 'Login', icon: 'mdi-lock-open', url: '/login' },
        { title: 'Registration', icon: 'mdi-account-plus', url: '/registration' },
      ]
    }
  }
};
</script>

<style></style>
