<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <img
      src="https://thumbs.dreamstime.com/b/v-164210403.jpg"
      width="30"
      height="30"
      class="d-inline-block align-top"
      alt="navbar icon"
    />
    <a class="navbar-brand" href="#" @click="landingPage">Todo</a>

    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">About Us</a>
      </li>
        <a class="nav-link login-btn" href="#" v-if="currentRouteName == 'LandingPage'" @click="loginPage">Login / Register</a>
        <p class="nav-link login-btn" href="#" v-else-if="currentRouteName == 'LoginPage'">Welcome Current Member!</p>
        <p class="nav-link login-btn" href="#" v-else-if="currentRouteName == 'RegisterPage'">Howdy New Member!</p>
        <a class="nav-link login-btn" href="#" v-else @click="logOut">Logout</a>
        <div>{{ $route.name }}</div>
    </ul>
  </nav>
</template>

<script>
import Swal from "sweetalert2";
export default {
    name: "Navbar",
    computed: {
        currentRouteName() {
            return this.$route.name;
        }
    },
    methods: {
        loginPage () {
            this.$router.push("./login")
        },
        logOut () {
            localStorage.clear()
            this.$router.push("./login")
            Swal.fire("Logged Out!", "Redirecting You To Login Page", "warning");

        },
        landingPage () {
            this.$router.push("./landing")
        }
    }
}
</script>

<style>
.login-btn {
    position: absolute;
    right: 0;
    padding-right: 1rem;
}
</style>