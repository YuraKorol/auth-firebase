<template>
  <v-snackbar
      v-model="error"
      :multi-line="true"
    >
      {{ errorMessage }}

      <v-btn
          color="red"
          @click="CLEAR_ERROR"
        >
          Close
        </v-btn>
    </v-snackbar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['error', 'errorMessage'])
  },
  methods: {
    ...mapActions(['CLEAR_ERROR'])
  }
}
</script>

<style>

</style>