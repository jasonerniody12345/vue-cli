<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <img
      src="https://thetodo.net/_nuxt/img/icon.fedfcdd.png"
      width="30"
      height="30"
      class="d-inline-block align-top ms-2"
      alt="navbar icon"
    />
    <a class="navbar-brand" href="#" @click="landingPage">Todo</a>

    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#features_section" v-if="currentRouteName == 'LandingPage'">Features</a>
        <a class="nav-link" href="#features_section" v-else></a>
      </li>
        <a class="nav-link login-btn me-2" href="#" v-if="currentRouteName == 'LandingPage'" @click="loginPage">Login / Register</a>
        <p class="nav-link login-btn me-2 greetings" href="#" v-else-if="currentRouteName == 'LoginPage'">Welcome Current Member!</p>
        <p class="nav-link login-btn me-2 greetings" href="#" v-else-if="currentRouteName == 'RegisterPage'">Welcome New Member!</p>
        <a class="nav-link login-btn me-2 logout" href="#" v-else @click="logOut">Logout</a>
        <!-- <div>{{ $route.name }}</div> -->
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
            localStorage.clear()
            this.$router.push("./")
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

.navbar {
  justify-content: normal;
}

.greetings {
  margin-top: -10px;
}

.logout {
  margin-top: -10px;
}
</style>