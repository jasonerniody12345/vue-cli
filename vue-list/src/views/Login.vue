<template>
  <div class="is-logged-out">
    <div class="title-login">
      <h2>Login</h2>
    </div>
    <div class="email-input-1">
      <input
        type="text"
        v-model="emailInput"
        class="form-control mt-2"
        placeholder="email"
        required
      />
    </div>
    <div class="password-input-1">
      <input
        type="password"
        v-model="passInput"
        class="form-control mt-2"
        placeholder="password"
        required
      />
    </div>
    <div class="login-false" v-if="isError === true">
      <p>Wrong Username or password</p>
    </div>
    <div class="button-login">
      <button @click="onSubmitLogin()" class="btn btn-primary">
        login
      </button>
      <button @click="onClickRegister" class="btn btn-primary ml-2">register</button>
    </div>
  </div>
</template>

    <script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "LoginForm",
  data() {
    return {
      emailInput: "",
      passInput: "",
      isError: false,
    };
  },
  methods: {
    onSubmitLogin() {
      axios
        .post("https://vue-mongoose.herokuapp.com/users/login", {
          email: this.emailInput,
          password: this.passInput,
        })
        .then((response) => {
          localStorage.setItem("token", response.data.accessToken);
          Swal.fire("Logged In!", "Redirecting You To Todo Page", "success");
          this.emailInput = "";
          this.passInput = "";
          this.$router.push({
            path: "/todos",
          });
        })
        .catch((err) => {
          console.log(err);
          this.isError = true;
        });
    },
    onClickRegister() {
      this.$router.push({
        path: "/register",
      });
    },
  },
};
</script>

<style>
</style>
