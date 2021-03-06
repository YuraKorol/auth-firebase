export default {
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push(
          `The length must be at least ${this.$v.password.$params.minLength.min}`
        );
      !this.$v.password.required && errors.push("Password is required");
      return errors;
    },
    confirmPasswordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push(
          `The length must be at least ${this.$v.password.$params.minLength.min}`
        );
      !this.$v.password.required && errors.push("Password is required");
      !this.$v.confirmPassword.sameAs &&
        errors.push("Passwords must be identical");
      return errors;
    }
  },
  
}