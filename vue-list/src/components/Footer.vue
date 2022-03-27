<template>
<div>
    <div class="footer1" v-if="currentRouteName != 'LandingPage'">
    <footer class="bg-dark text-center text-white height">
        <!-- <div :class="isMobile ? 'mobile' : 'icon1'"> -->
        <!-- <div class="icon1">
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><i class="fa fa-github-square icon-position colors" aria-hidden="true"></i></a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><i class="fa fa-instagram me-2 colors" aria-hidden="true"></i></a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><i class="fa fa-twitter-square colors" aria-hidden="true"></i></a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><i class="fa fa-facebook-square ms-2 colors" aria-hidden="true"></i></a>
        </div> -->
        <div class="text-center p-3">© 2021 Copyright: Mantoel.Inc</div>
        <!-- </div> -->
    </footer>
    </div>
    <div class="footer2" v-else>
    <footer class="bg-dark text-center text-white height2">
        <!-- <div :class="isMobile ? 'mobile' : 'icon1'">
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><i class="fa fa-github-square mt-3 icon-position colors" aria-hidden="true"></i></a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><i class="fa fa-instagram me-2 colors" aria-hidden="true"></i></a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><i class="fa fa-twitter-square colors" aria-hidden="true"></i></a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><i class="fa fa-facebook-square ms-2 colors" aria-hidden="true"></i></a>
        </div> -->
    <div class="text-center p-3">© 2021 Copyright: Mantoel.Inc</div>
    </footer>
    </div>
</div>
</template>

<script>
export default {
    name: "Footer",
    computed: {
        currentRouteName() {
            return this.$route.name;
        },
        isMobile() {
            return window.innerWidth < 500;
        },
    }
}
</script>

<style>
.height {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
}

.height2 {
    margin-top : 50px;
}

.colors {
    color:#ffffff;
}

.icon-position {
    margin-right: 10px;
}

.icon1 {
    justify-content: normal;
    margin-top: 10px;
    margin-bottom: -10px;
}
</style>