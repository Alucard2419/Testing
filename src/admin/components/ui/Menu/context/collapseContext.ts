import { createContext } from 'react';

const CollapseContext = createContext(null  );

export const CollapseContextProvider = CollapseContext.Provider;

export const CollapseContextConsumer = CollapseContext.Consumer;

export default CollapseContext;
