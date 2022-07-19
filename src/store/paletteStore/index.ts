import {Module, createComposable} from "vuex-smart-module";
import state from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import PaletteGetters from "./getters";
import PaletteState from "./state";
import PaletteActions from "./actions";
import PaletteMutations from "./mutations";

export const paletteStore = new Module( {
  actions: PaletteActions,
  getters: PaletteGetters,
  mutations: PaletteMutations,
  state: PaletteState,
});

export const usePalette = createComposable(paletteStore);
