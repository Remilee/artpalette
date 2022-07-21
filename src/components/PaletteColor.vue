<template>
  <q-btn flat no-caps class="flex column palette-color" @click="showInfo">
    <q-img class="palette-color__img" style="height: 48px; max-width: 48px" :src="imgSource"/>
    <div class="flex column palette-color__title color-title">
      <span class = "color-title__number">{{ paletteInfoProp.code}}</span>
      <span class = "color-title__name">{{ paletteInfoProp.name}}</span>
    </div>
  </q-btn>
</template>

<script lang="ts">
import {defineComponent, PropType, computed} from "vue";
import {IColorInfo} from "src/models";
import {usePalette} from "src/store/paletteStore";

export default defineComponent ({
  name: "PaletteColor",
  props: {
    paletteInfoProp: Object as PropType<IColorInfo>
  },
  setup(props) {
    const imgSource = computed(() => {
      if (props.paletteInfoProp) {
        return `colors/${props.paletteInfoProp.imgSrc}`
      } else {
        return null
      }
    });

    const {mutations} = usePalette()

    function showInfo() {
      if (props.paletteInfoProp) {
        mutations.setColorInfo(props.paletteInfoProp)
      }
      mutations.showInfoWindowVisibility(true)
    }
    return { imgSource, showInfo }
  }
})
</script>

<style scoped>

</style>
