"use client"

import React, { createContext, Dispatch, ReactNode, RefObject, SetStateAction, useRef, useState } from 'react';

type DivRefsContextType = {
  section1Ref: RefObject<HTMLDivElement>;
  section2Ref: RefObject<HTMLDivElement>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>
};
type ProvidersProps = { children: ReactNode };

const Context = createContext<DivRefsContextType | null>(null);

function Providers({ children }: ProvidersProps) {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const [open, setOpen] = useState(false)

  return (
    <Context.Provider value={{ section1Ref, section2Ref, open, setOpen }}>
      {children}
    </Context.Provider>
  );
}

export { Context };
export default Providers;
