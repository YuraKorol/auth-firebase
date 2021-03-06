<template>
  <v-app>
    <component :is="layout">
      <router-view />
    </component>
    <ErrorMessage />
  </v-app>
</template>

<script>
import ErrorMessage from '@/components/ErrorMessage.vue'

import EmptyLayout from '@/layouts/EmptyLayout.vue'
import NotfoundLayout from '@/layouts/NotfoundLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'

export default {
  name: "App",
  computed: {
    layout() {
      return (this.$route.meta.layout || 'notfound') + '-layout' 
    }
  },
  components:{
    EmptyLayout,
    NotfoundLayout,
    MainLayout,
    ErrorMessage
  }
};
</script>