<template>
  <q-page class="column">
    <h4 class="page-title text-h4">Палитры</h4>
    <div class="palette-list">
      <Palette class="palette-item" :paletteInfo="markerPalette" v-if="markerPalette.values.length > 0"/>
      <Palette class="palette-item" :paletteInfo="waterColorPalette" v-if="waterColorPalette.values.length > 0"/>
      <Palette class="palette-item" :paletteInfo="coloredPencilsPalette" v-if="coloredPencilsPalette.values.length > 0"/>
    </div>
    <ColorInfoWindow :color="colorInfo"/>
  </q-page>
</template>

<script lang="ts">
import {defineComponent, computed} from "vue";
import Palette from "components/Palette.vue";
import {usePalette} from "src/store/paletteStore";
import ColorInfoWindow from "components/ColorInfoWindow.vue";

export default defineComponent({
  name: "PageIndex",
  components: {ColorInfoWindow, Palette},
  setup() {
    const {getters} = usePalette()
    const markerPalette = computed(() => getters.getFetchedPalettes().markers)
    const waterColorPalette = computed(() => getters.getFetchedPalettes().watercolor)
    const coloredPencilsPalette = computed(() => getters.getFetchedPalettes().colorPencils)

    const colorInfo = computed( () => {
      return getters.getDetailColorInfo()
    })
    return {markerPalette, waterColorPalette, coloredPencilsPalette
      , colorInfo}
  },
});
</script>
