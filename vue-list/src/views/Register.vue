<template>
  <div class="register">
    <div class="title-register">
      <h2>Register</h2>
    </div>
    <div class="fullName-input">
      <input
        type="text"
        v-model="userFullName"
        class="form-control mt-2"
        placeholder="full Name"
        required
      />
    </div>
    <div class="email-input">
      <input
        type="email"
        v-model="userEmail"
        class="form-control mt-2"
        placeholder="email"
        required
      />
    </div>
    <div class="password-input">
      <input
        type="password"
        v-model="userPass"
        class="form-control mt-2"
        placeholder="password"
        required
      />
    </div>
    <div class="register-false mt-3" v-if="isErrorRegister === true">
      <p>{{ errorMessage }}</p>
    </div>
    <div class="button-register">
      <button
        :disabled="validateRegisterInput === false"
        @click="onSubmitRegister"
        class="btn btn-primary"
      >
        register
      </button>
      <button @click="onClickBack" class="btn btn-primary ms-2">back</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "RegisterForm",
  data() {
    return {
      isErrorRegister: true,
      errorMessage: "",
      userFullName: "",
      userEmail: "",
      userPass: "",
    };
  },
  computed: {
    validateRegisterInput: function () {
      return (
        this.userEmail !== "" &&
        this.userPass !== "" &&
        this.userFullName !== ""
      );
    },
  },
  methods: {
    onSubmitRegister() {
      if (this.userFullName.length < 6) {
        console.log("Fullname is less than 6 alphabet");
        this.errorMessage = "Fullname is less than 6 alphabet";
        this.isErrorRegister = true;
         Swal.hideLoading();
      } else if (this.userEmail.length < 6) {
        console.log("Email is less than 6 alphabet");
        this.errorMessage = "Email is less than 6 alphabet";
        this.isErrorRegister = true;
        Swal.hideLoading();
      } else if (this.userPass.length < 6) {
        console.log("Password is less than 6 alphabet");
        this.errorMessage = "Password is less than 6 alphabet";
        this.isErrorRegister = true;
        Swal.hideLoading();
      } else {
        Swal.fire({
          title: "Please Wait",
          didOpen: () => {
            Swal.showLoading();
          },
        });
        axios
          .post("https://vue-mongoose.herokuapp.com/users/create", {
            name: this.userFullName,
            email: this.userEmail,
            password: this.userPass,
          })
          .then(() => {
            Swal.fire(
              "Registered!",
              "Redirecting You To Login Page",
              "success"
            );
            this.userFullName = "";
            this.userEmail = "";
            this.userPass = "";
            this.$router.push({
              path: "/login",
            });
          })
          .catch((err) => {
            console.log(err);
            this.isError = true;
          });
      }
    },
    onClickBack() {
      this.$router.push({
        path: "/login",
      });
    },
  },
};
</script>
<style>
</style>
