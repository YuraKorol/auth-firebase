<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Create account</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                prepend-icon="mdi-gmail"
                name="gmail"
                label="Gmail"
                type="email"
                v-model="email"
                @blur="$v.email.$touch()"
                :error-messages="emailErrors"
                required
              ></v-text-field>
              <v-text-field
                prepend-icon="mdi-lock"
                name="password"
                label="Password"
                type="password"
                v-model="password"
                @blur="$v.password.$touch()"
                :error-messages="passwordErrors"
                required
              ></v-text-field>
              <v-text-field
                prepend-icon="mdi-lock"
                name="confirmPassword"
                label="Confirm password"
                type="password"
                v-model="confirmPassword"
                @blur="$v.password.$touch()"
                :error-messages="confirmPasswordErrors"
                required
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="primary" to="/login">
              Sign in
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" :disabled="$v.$invalid" @click="onSubmit()"
              >Login</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import authValidateMixins from '@/mixins/authValidateMixins'
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  mixins:[authValidateMixins],
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    onSubmit() {
      const newUser = {
        email: this.email,
        password: this.password
      };
      if (this.$v.$invalid === false) {
        this.$store.dispatch('REGISTRATION_USER', newUser)
      }
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(4)
    },
    confirmPassword: {
      required,
      minLength: minLength(4),
      sameAs: sameAs("password")
    }
  }
};
</script>

<style></style>
