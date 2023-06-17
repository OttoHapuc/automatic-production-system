'use client'
import useLocalStorage from "@/hooks/useLocalStorage";
import { UserData } from "@/utils/protocols";
import { createContext, useContext, useMemo } from "react";

interface UserDataContextType {
  userData?: UserData;
  setUserData: (value: UserData) => void;
}

const UserDataContext = createContext<UserDataContextType | undefined>(
  undefined
);

export function UserDataProvider({ children }: { children: React.ReactNode }) {
  const [userData, setUserData] = useLocalStorage<UserData>("userData", {
    token: "",
    cart: [],
  });

  const contextValue = useMemo(
    () => ({ userData, setUserData }),
    [userData, setUserData]
  );

  return (
    <UserDataContext.Provider value={contextValue}>
      {children}
    </UserDataContext.Provider>
  );
}

export function useUserData() {
  const context = useContext(UserDataContext);
  if (!context) {
    throw new Error("useUserData must be used within a UserDataProvider");
  }
  return context;
}
