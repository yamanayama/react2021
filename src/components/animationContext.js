// eslint-disable-next-line
import React, { useState, createContext } from "react"

export const AnimationContext = createContext(false);

export function AnimationContextProvider(props) {
  const [stop, setStop] = useState(false);

  return (
    <AnimationContext.Provider value={[stop, setStop]}>
      {props.children}
    </AnimationContext.Provider>
  );
}