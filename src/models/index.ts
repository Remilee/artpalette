export interface IPaletteState {
  palettes: IPalette,
  infoVisibility: boolean,
  detailColorInfo: IColorInfo
}
export interface IFetchedPalette {
  palettes: IPalette
}
export interface IPalette {
  markers: IPaletteInfo,
  watercolor: IPaletteInfo,
  colorPencils: IPaletteInfo,
}
export interface IPaletteInfo {
  title: string,
  values: IColorInfo[]
}
export interface IColorInfo {
  id: number,
  name: string,
  code: string,
  imgSrc: string
}
