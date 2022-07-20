import {Getters} from "vuex-smart-module"
import PaletteState from "src/store/paletteStore/state"

export default class PaletteGetters extends Getters<PaletteState> {
  getFetchedPalettes() {
    return this.state.palettes
  }
  getInfoVisibility() {
    return this.state.infoVisibility
  }
  getDetailColorInfo() {
    return this.state.detailColorInfo
  }
}
