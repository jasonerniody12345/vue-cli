<template>
  <!-- <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item">
        <img src="../assets/triple.jpg" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="../assets/rain.jpg" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item active">
        <img src="../assets/night.jpg" class="d-block w-100" alt="..." />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div> -->
  <vueper-slides autoplay fixed-height="500px">
    <vueper-slide 
      v-for="(slide, i) in slides"
      :key="i"
      :image="slide.image"
    />
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  name: "Carousel",
  components: {
    VueperSlides,
    VueperSlide,
  },
  data: () => ({
    slides: [
      {
        title: "Slide #1",
        content: "Slide content.",
        image: require('../assets/triple.jpg')
      },
      {
        title: "Slide #2",
        content: "Slide content.",
        image: require('../assets/rain.jpg')
      },
      {
        title: "Slide #3",
        content: "Slide content.",
        image: require('../assets/night.jpg')
      },
    ],
  }),
  computed: {
    isMobile() {
      return window.innerWidth < 500;
    },
  },
};
</script>

<style>
.mobile{
  height: 300px;
  width: 300px;
}
</style>