<template>
  <section>
    <v-card class="elevation-10" style="border-radius: 10px; overflow: hidden">
      <div style="display: flex; align-items: center">
        <v-card-title style="color: black; background-color: white">
          Energy Consumption (kWh) for selected floor per month
        </v-card-title>
        <v-spacer></v-spacer>
        <h1 style="padding-right: 20px">hello</h1>
      </div>

      <LineGraph id="mbsa" class="mb-10 pt-5 pb-5 bottom" />
    </v-card>
  </section>
</template>

<script>
import LineGraph from "~/components/LineGraph";
export default {
  components: {
    LineGraph,
  },
};
</script>

<style scoped></style>
