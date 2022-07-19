import {IPalette, IPaletteState} from "src/models";

export default class PaletteState implements IPaletteState {
  palettes: IPalette = {markers: [], watercolor: [], colorPencils: []};
}
