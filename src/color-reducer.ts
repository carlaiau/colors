import { rgb } from 'color-convert';

export type UpdateColorAction = {
  type: 'update-hex-color';
  payload: {
    hexColor: string;
  };
};

export type UpdateRGBColorAction = {
  type: 'update-rgb-color';
  payload: {
    rgb: [number, number, number];
  };
};

type ColorState = {
  hexColor: string;
};
export type AdjustColorActions = UpdateColorAction | UpdateRGBColorAction;
export const initialState: ColorState = {
  hexColor: '#A55BAD',
};

export const colorReducer = (
  state: ColorState = initialState,
  action: AdjustColorActions,
) => {
  if (action.type === 'update-hex-color') {
    const { hexColor } = action.payload;
    return { ...state, hexColor };
  }
  if (action.type === 'update-rgb-color') {
    const rgbArray = action.payload.rgb;
    return { ...state, hexColor: '#' + rgb.hex(rgbArray) };
  }
  return state;
};
