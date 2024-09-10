import React from 'react';

export const createContext = <T extends {}>() => {
  const context = React.createContext<T | undefined>(undefined);

  const useContext = () => {
    const ctx = React.useContext(context);
    if (ctx === undefined) {
      throw new Error(
        `useContext but be inside a provider and a value must be provided`,
      );
    }
    return ctx;
  };

  return [useContext, context.Provider] as const;
};
