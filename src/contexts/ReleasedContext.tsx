import { createContext, useEffect, useState } from 'react';

export const ReleasedContext = createContext([]);

export function ReleasedContextProvider({ children }) {
  const [released, setReleased] = useState([]);

  return <ReleasedContext.Provider value={{ released, setReleased }}>{children}</ReleasedContext.Provider>;
}
