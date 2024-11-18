"use client"

import React, { createContext, ReactNode, RefObject, useRef } from 'react';

type DivRefsContextType = {
  section1Ref: RefObject<HTMLDivElement>;
  section2Ref: RefObject<HTMLDivElement>;
};
type ProvidersProps = { children: ReactNode };

const Context = createContext<DivRefsContextType | null>(null);

function Providers({ children }: ProvidersProps) {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  return (
    <Context.Provider value={{ section1Ref, section2Ref }}>
      {children}
    </Context.Provider>
  );
}

export { Context };
export default Providers;
