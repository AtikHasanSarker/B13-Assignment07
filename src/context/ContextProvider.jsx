import React, { createContext, useState } from 'react';

export const TimelineContext = createContext()

const ContextProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);
  const data = {
    timeline,
    setTimeline,
  };
  return <TimelineContext.Provider value={data}>{children}</TimelineContext.Provider>;
};

export default ContextProvider;