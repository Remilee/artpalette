import {Mutations} from "vuex-smart-module";
import PaletteState from "src/store/paletteStore/state";
import {IColorInfo, IPalette} from "src/models";

export default class PaletteMutations extends Mutations<PaletteState> {
  setInitPalette(newVal: IPalette) {
    this.state.palettes = newVal;
  }
  showInfoWindowVisibility(newVal: boolean) {
    this.state.infoVisibility = newVal;
  }
  setColorInfo(newVal: IColorInfo) {
    this.state.detailColorInfo = newVal
  }
}
