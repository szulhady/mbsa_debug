<template>
  <GMap :center="center" :zoom="zoom" ref="map">
    <GMapCircle
      v-for="(pin, index) in markers"
      :key="index"
      :center="pin.position"
      :radius="100000"
      :visible="true"
      :options="{ fillColor: 'red', fillOpacity: 1.0 }"
    ></GMapCircle>
  </GMap>
</template>

<script>
export default {
  data() {
    return {
      zoom: 5,
      center: { lat: 59.339025, lng: 18.065818 },
      markers: [
        { Id: 1, name: "Oslo", position: { lat: 59.923043, lng: 10.752839 } },
        {
          Id: 2,
          name: "Stockholm",
          position: { lat: 59.339025, lng: 18.065818 },
        },
        {
          Id: 3,
          name: "Copenhagen",
          position: { lat: 55.675507, lng: 12.574227 },
        },
        { Id: 4, name: "Berlin", position: { lat: 52.521248, lng: 13.399038 } },
        { Id: 5, name: "Paris", position: { lat: 48.856127, lng: 2.346525 } },
      ],
    };
  },
  methods: {},
};
</script>

<style>
.GMap__Wrapper {
  height: 70vh;
}
</style>
