import { useContext } from "react";
import AppContext from "../context/AppContext.";

export const useAppPurchases = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("useAppPurchases must be used within an AppProvider");
  }

  return context;
};
