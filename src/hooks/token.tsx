import { useUserData } from "@/context/userContext";

export default function useToken(newToken?: string): string | undefined {
  const { userData, setUserData } = useUserData();

  if (newToken) {
    const updatedUserData = { ...userData, token: newToken };
    setUserData(updatedUserData);
    return newToken;
  }

  return userData?.token;
}
