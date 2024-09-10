import { PropsWithChildren, useReducer } from 'react';
import { createContext } from './create-context';
import {
  colorReducer,
  initialState,
  AdjustColorActions,
} from './color-reducer';

type ColorContextState = {
  hexColor: string;
  dispatch: React.Dispatch<AdjustColorActions>;
};

const [useColorContext, ContextProvider] = createContext<ColorContextState>();

export const useContext = useColorContext;

export const ColorProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(colorReducer, initialState);
  const { hexColor } = state;
  return (
    <ContextProvider value={{ hexColor, dispatch }}>{children}</ContextProvider>
  );
};
