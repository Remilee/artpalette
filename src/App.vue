<template>
  <router-view />
</template>
<script lang="ts">
import {defineComponent, onMounted} from "vue";
import {usePalette} from "src/store/paletteStore";

export default defineComponent({
  name: "App",
  setup() {
    const {actions} = usePalette()
    onMounted( () => {
      void actions.fetchData()
    })
  }
});
</script>
