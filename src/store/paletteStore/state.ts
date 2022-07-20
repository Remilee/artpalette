import {IPalette, IPaletteState} from "src/models";

export default class PaletteState implements IPaletteState {
  palettes: IPalette = {
    markers: { title: "", values: []},
    watercolor: { title: "", values: []},
    colorPencils: { title: "", values: []},
  }
}
