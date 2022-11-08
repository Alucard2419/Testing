import { createContext } from 'react';

const MenuContext = createContext(null  );

export const MenuContextProvider = MenuContext.Provider;

export const MenuContextConsumer = MenuContext.Consumer;

export default MenuContext;
