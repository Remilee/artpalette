import {Actions} from "vuex-smart-module";
import PaletteGetters from "src/store/paletteStore/getters";
import PaletteState from "src/store/paletteStore/state";
import PaletteMutations from "src/store/paletteStore/mutations";
import axios from "axios";
import {IFetchedPalette} from "src/models";
const paletteData = "paletteData.json";

export default class PaletteActions extends Actions<PaletteState, PaletteGetters, PaletteMutations, PaletteActions> {
  fetchData() {
    void axios
      .get<IFetchedPalette>(paletteData)
      .then(response => {
        if (response.data.palettes) {
          this.mutations.setInitPalette(response.data.palettes)
        }

      })
      .catch(err => {
        console.log(err)
      })
  }
}
