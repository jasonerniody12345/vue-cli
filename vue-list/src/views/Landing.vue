<template>
  <div>
    <Carousel></Carousel>
    <div class="text-center mt-5">
      <section id="features_section"><h1>Features</h1></section>
      <div class="overflow-hidden mt-5">
        <div class="row gx-5 px-5 py-5">
          <div :class="isMobile ? 'col-12' : 'col-6'">
            <img
              src="https://thetodo.net/_nuxt/img/undraw_file_sync_ot38.e7c095c.svg"
              atl="..."
              :class="{'desktop': !isMobile, 'mobile': isMobile}"
            />
          </div>
          <div :class="isMobile ? 'col-12' : 'col-6'">
            <div class="p-3 text-start mt-5 width-500">
              <h3>Simply sync with Google Tasks</h3>
              ToDo for Google is an application for users who want to use Google
              Tasks with Desktop. You can add, edit and delete tasks that can be
              done in Google Tasks. The goal of ToDo for Google is to imitate or
              make it easier to use with Google Tasks simply and quickly.
            </div>
          </div>
        </div>
      </div>
      <div class="overflow-hidden mt-5">
        <div class="row gx-5 px-5 py-5">
          <div :class="isMobile ? 'col-12' : 'col-6'">
            <div class="p-3 text-start mt-5 width-500">
              <h3>Can be used in full screen</h3>
              The browser version can only be used in a small area of the
              sidebar. ToDo for Google can use Google Tasks in full screen,
              making it faster to use.
            </div>
          </div>
          <div :class="isMobile ? 'col-12' : 'col-6'">
            <img
              src="https://thetodo.net/_nuxt/img/fullscreen.beb32a3.webp"
              atl="..."
              :class="{'desktop': !isMobile, 'mobile': isMobile}"
            />
          </div>
        </div>
      </div>
      <div class="overflow-hidden mt-5">
        <div class="row gx-5 px-5 py-5">
          <div class="col-6">
            <img
              src="https://thetodo.net/_nuxt/img/undraw_web_search_eetr.54994a7.svg"
              atl="..."
              :class="{'desktop': !isMobile, 'mobile': isMobile}"
            />
          </div>
          <div :class="isMobile ? 'col-12' : 'col-6'">
            <div class="p-3 text-start mt-5 width-500">
              <h3>Full-text search available for all tasks</h3>
              You can search from all tasks by entering a keyword. You can
              quickly find a task that you do not know where you went. You can
              edit or delete the searched task immediately. I can do it.
            </div>
          </div>
        </div>
      </div>
      <div class="overflow-hidden mt-5">
        <div class="row gx-5 px-5 py-5">
          <div :class="isMobile ? 'col-12' : 'col-6'">
            <div class="p-3 text-start mt-5 width-500">
              <h3>You can sort the task list and tasks freely</h3>
              You can sort the task list and tasks by drag and drop, due date,
              alphabetical order, etc. You can sort the tasks in order of
              priority from the top, or from the one with the approaching due
              date. You can sort them in order or sort them freely.
            </div>
          </div>
          <div class="col-6">
            <img
              src="https://thetodo.net/_nuxt/img/undraw_schedule_pnbk.90b84f1.svg"
              atl="..."
              :class="{'desktop': !isMobile, 'mobile': isMobile}"
            />
          </div>
        </div>
      </div>
      <div class="overflow-hidden mt-5">
        <div class="row gx-5 px-5 py-5">
          <div class="col-6">
            <img
              src="https://thetodo.net/_nuxt/img/undraw_access_account_99n5.0924830.svg"
              atl="..."
              :class="{'desktop': !isMobile, 'mobile': isMobile}"
            />
          </div>
          <div :class="isMobile ? 'col-12' : 'col-6'">
            <div class="p-3 text-start mt-5 width-500">
              <h3>Do not send data to non-Google servers</h3>
              Data is sent directly to Google's servers and not to any other
              server. Therefore, the data is completely closed only on your
              computer and Google server and can be used safely. Google Tasks
              can be used within ToDo for Google using Google's OAuth
              authentication (OpenID Connect is used and the authentication flow
              is closed only within Google site). Therefore, your login password
              can only be entered on the Google site and you will not be asked
              for the password in ToDo for Google.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
export default {
  name: "LandingPage",
  // props: ["isMobile"],
  components: {
    Carousel,
  },
  computed: {
      isMobile() {
      return window.innerWidth < 500;
    }
  }
};
</script>


<style>
.desktop {
  width: 500px;
}
.mobile {
  width: 300px;
}
</style>