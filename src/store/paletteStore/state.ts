import {IColorInfo, IPalette, IPaletteState} from "src/models";

export default class PaletteState implements IPaletteState {
  palettes: IPalette = {
    markers: {title: "", values: []},
    watercolor: {title: "", values: []},
    colorPencils: {title: "", values: []},
  };
  infoVisibility = false;
  detailColorInfo: IColorInfo = { id: 0, name: "", code: "", imgSrc: ""}}
