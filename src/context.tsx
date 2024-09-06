import { createContext, PropsWithChildren, useReducer } from 'react';
import {
  colorReducer,
  initialState,
  AdjustColorActions,
} from './color-reducer';

type ColorContextState = {
  hexColor: string;
  dispatch: React.Dispatch<AdjustColorActions>;
};

export const ColorContext = createContext<ColorContextState>({
  hexColor: '#FFADEF',
} as ColorContextState);

export const ColorProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(colorReducer, initialState);
  const { hexColor } = state;
  return (
    <ColorContext.Provider value={{ hexColor, dispatch }}>
      {children}
    </ColorContext.Provider>
  );
};
