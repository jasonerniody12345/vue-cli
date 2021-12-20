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
      <p>{{errorMessage}}</p>
    </div>
    <div class="button-login">
      <button @click="onSubmitLogin()" class="btn btn-primary">login</button>
      <button @click="onClickRegister" class="btn btn-primary ms-2">
        register
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import { USER_LOGIN } from '../constants/api';
export default {
  name: "LoginForm",
  data() {
    return {
      emailInput: "",
      passInput: "",
      isError: false,
      errorMessage: "",
    };
  },
  methods: {
    onSubmitLogin() {
      Swal.fire({
        title: "Please Wait",
        didOpen: () => {
          Swal.showLoading();
        },
      })
      axios
        .post(`${USER_LOGIN}`, {
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
          // console.log(err.response);
          if (err.response.status == 401) {
            Swal.close();
            this.isError = true;
            this.errorMessage = err.response.data.message
          }
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
.is-logged-out {
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  margin-top: 17%;
}

.is-logged-in {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 5%;
  align-items: center;
}

.login-false {
  color: rgb(160, 23, 23);
  margin-top: 1%;
}

.button-login {
  margin-top: 1rem;
}


</style>
