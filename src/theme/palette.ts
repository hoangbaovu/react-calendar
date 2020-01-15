export interface Palette {
  white: string;
  grey: string;
  black: string;
  primary: string;
  secondary: string;
};

export type PaletteInput = {
  readonly [K in keyof Palette]+?: Palette[K];
}

const createPalette = (palette: PaletteInput): Palette => {
  const {
    white = '#fff',
    grey = '#f7f9fa',
    black = '#222',
    primary = '#D33B2C',
    secondary = '#f53b57'
  } = palette;

  return {
    white,
    grey,
    black,
    primary,
    secondary
  };
};

export default createPalette;