import { useState } from 'react';

type SetValue<T> = (value: T | ((prevValue: T) => T)) => void;
type UseLocalStorageReturnType<T> = [T | undefined, SetValue<T>];

export default function useLocalStorage<T>(key: string, initialValue: any): UseLocalStorageReturnType<T> {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue: SetValue<T> = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}