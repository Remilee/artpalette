<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog :model-value="alert" persistent seamless position="bottom">
      <q-card class="q-pa-md" style="width: 100%; height: 50vh; border-radius: 30px 30px 0 0;">
        <div class="card__header flex justify-between q-mb-md">
          <div></div>
          <q-btn flat icon-right="close" @click="closeDialog"/>
        </div>
        <div class="detail__title flex justify-between">
          <span class="detail__name text-h4"> {{ color.name }}</span>
          <q-img class="detail__img" style="height: 36px; max-width: 96px" :src="`colors/${color.imgSrc}`"/>

        </div>
        <q-separator class="q-mt-md"/>
        <div class="detail__content">
          <div class="detail__amount flex items-center q-mb-md" style="color: black !important;">
            <span class="text-subtitle1 q-mr-md">Количество</span>
            <q-linear-progress
              stripe rounded
              :value="color.amount"
              :color="calculatedColor"
              class="q-mr-xs"
              size="xl"
              style="width: 24px;"
            />
            <span class="text-caption">{{ colorLabel }}</span>
          </div>
          <q-checkbox v-model="isRefill" left-label label="Заправка" disable class="text-subtitle1"/>
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from "vue";
import {IColorInfo} from "src/models";
import {usePalette} from "src/store/paletteStore";

export default defineComponent({
  name: "ColorInfoWindow",
  props: {
    color: Object as PropType<IColorInfo>
  },
  setup(props) {
    const {mutations, getters} = usePalette()
    const alert = computed(() => {
      return getters.getInfoVisibility()
    })

    function closeDialog() {
      mutations.showInfoWindowVisibility(false)
    }

    const calculatedColor = computed(() => {
      if (props.color) {
        if (props.color.amount >= 80) {
          return "green"
        } else if (props.color.amount >= 33 && props.color.amount < 80) {
          return "yellow"
        } else if (props.color.amount < 33 && props.color.amount > 10) {
          return "orange"
        } else if (props.color.amount <= 10) {
          return "red"
        } else {
          return "grey"
        }
      } else return "grey"
    })

    const colorLabel = computed(() => {
      if (props.color) {
        if (props.color.amount >= 80) {
          return "Много"
        } else if (props.color.amount >= 33 && props.color.amount < 80) {
          return "Достаточно"
        } else if (props.color.amount < 33 && props.color.amount > 10) {
          return "Мало"
        } else if (props.color.amount <= 10) {
          return "Почти закончилось"
        } else {
          return "Нет данных"
        }
      } else return "Нет данных"
    })

    const isRefill = computed(() => {
      if (props.color) {
        return Boolean(props.color.refill)
      } else {
        return false
      }
    })

    return {closeDialog, alert, calculatedColor, isRefill, colorLabel}
  }
})
</script>
