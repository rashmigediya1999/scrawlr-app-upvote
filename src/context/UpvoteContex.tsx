import React, { createContext, useContext } from "react";
import { useUpvoteState } from "../hooks/useUpvoteState";
import { UpvoteContextType } from "../types";

const UpvoteContext = createContext<UpvoteContextType | undefined>(undefined);

export const UpvoteProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const state = useUpvoteState();
  return (
    <UpvoteContext.Provider value={state}>{children}</UpvoteContext.Provider>
  );
};

export const useUpvote = () => {
  const context = useContext(UpvoteContext);
  if (!context) {
    throw new Error("useUpvote must be used within an UpvoteProvider");
  }
  return context;
};
