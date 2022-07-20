<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog :model-value="alert" persistent seamless position="bottom">
      <q-card style="width: 100%; height: 50vh; border-radius: 30px 30px 0 0;" >
        <span class="text-h3">olalalala</span>

<!--        <q-linear-progress :value="0.6" color="pink"/>-->
<!--        <q-card-section class="row items-center no-wrap">-->
<!--          <div>-->
<!--            <div class="text-weight-bold">The Walker</div>-->
<!--            <div class="text-grey">Fitz & The Tantrums</div>-->
<!--          </div>-->
<!--          <q-space/>-->
<!--          <q-btn flat round icon="play_arrow"/>-->
<!--          <q-btn flat round icon="pause"/>-->
<!--          <q-btn flat round icon="close" v-close-popup/>-->
<!--        </q-card-section>-->
      </q-card>
    </q-dialog>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent ({
  name: "ColorInfoWindow",
  props: {
    alert: Boolean,
  },
})
</script>

<style scoped>

</style>
