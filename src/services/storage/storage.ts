import {asyncStorage} from './implementation/async-storage';

export interface Storage {
  getItem: <T = unknown>(key: string) => Promise<T | null>;
  setItem: <T>(key: string, value: T) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
}

export const storage: Storage = asyncStorage;
