<template>
  <div class="flex column palette-color">
    <q-img class="palette-color__img" style="height: 48px; max-width: 48px" :src="imgSource"/>
    <div class="flex column palette-color__title color-title">
      <span class = "color-title__number">{{ color.code}}</span>
      <span class = "color-title__name">{{ color.name}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, PropType, computed} from "vue";
import {IColorInfo} from "src/models";

export default defineComponent ({
  name: "PaletteColor",
  props: {
    paletteInfoProp: Object as PropType<IColorInfo>
  },
  setup(props) {
    const color = ref(props.paletteInfoProp)
    const imgSource = computed( () => {
      if (props.paletteInfoProp) {
        return `colors/${props.paletteInfoProp.imgSrc}`;
      }
      else {return null}
    })
    return { color, imgSource }
  }
})
</script>

<style scoped>

</style>
