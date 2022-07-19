<template>
  <div class="palette-container">
    <span class="text-subtitle1">{{ paletteNameProp }}</span>
    <div class="palette-grid">
      <span v-for="paletteColor in paletteValuesProp" :key="paletteColor.id">
        <PaletteColor class="palette-item" :paletteInfoProp="paletteColor"/>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import PaletteColor from "components/PaletteColor.vue";
import {IColorInfo, IPaletteInfo} from "src/models";

export default defineComponent({
  name: "Palette",
  components: {PaletteColor},
  props: {
    paletteInfo: Object as PropType<IPaletteInfo>
  },
  setup(props) {
    const paletteNameProp = ref(props.paletteInfo.title)
    const paletteValuesProp = ref(props.paletteInfo.values)
    return {paletteNameProp, paletteValuesProp }}
})
</script>
