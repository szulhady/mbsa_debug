<template>
  <VueSlickCarousel :arrows="true" :dots="true" v-bind="settings">
    <div v-for="(detail, index) in details" :key="index">
      <DetailCard
        :title="detail.title"
        :icon="detail.icon"
        :description="detail.description"
        :index="index"
        class="px-5"
      />
    </div>
  </VueSlickCarousel>
</template>

<script>
import DetailCard from "~/components/DetailCard";

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  data() {
    return {
      details: [
        {
          title: "Building",
          icon: "MBSA.jpg",
          description: "Majlis Bandaraya Shah Alam",
        },
        {
          title: "Owner",
          icon: "OWNER.png",
          description: "MBSA",
        },
        {
          title: "No. of Floors",
          icon: "NOOFFLOOR.png",
          description: "28",
        },
        {
          title: "Net Floor Area",
          icon: "NETFLOORAREA.png",
          description: "64161.85 m²",
        },
        {
          title: "No. of Occupants",
          icon: "NOOFOCCUPANTS.png",
          description: "400",
        },
        {
          title: "Carbon Emission Intensity",
          icon: "CEI.png",
          description: "97,601.38",
        },
      ],
      settings: {
        dots: true,
        // "focusOnSelect": true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        touchThreshold: 5,
      },
    };
  },
  components: {
    DetailCard,
    VueSlickCarousel,
  },
};
</script>

<style scoped>
.v-slide-group__wrapper {
  overflow-x: auto; /* Enables the horizontal scrollbar */
  /* Next lines hides scrollbar in different browsers for styling purposes */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.v-slide-group__wrapper::-webkit-scrollbar {
  display: none; /* Chrome opera and Safary */
  width: 0px;
  background: transparent;
}
</style>
