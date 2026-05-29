import { Platform } from "react-native";

// Native storage
import * as SecureStore from "expo-secure-store";

const TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";

// Helper: choose storage based on platform
const isWeb = Platform.OS === "web";

export const tokenStorage = {
  setToken: async (token: string) => {
    try {
      if (isWeb) {
        localStorage.setItem(TOKEN_KEY, token);
      } else {
        await SecureStore.setItemAsync(TOKEN_KEY, token);
      }
    } catch (e) {
      console.error("Error saving access token:", e);
    }
  },

  setRefreshToken: async (token: string) => {
    try {
      if (isWeb) {
        localStorage.setItem(REFRESH_TOKEN_KEY, token);
      } else {
        await SecureStore.setItemAsync(REFRESH_TOKEN_KEY, token);
      }
    } catch (e) {
      console.error("Error saving refresh token:", e);
    }
  },

  getToken: async (): Promise<string | null> => {
    try {
      if (isWeb) {
        return localStorage.getItem(TOKEN_KEY);
      } else {
        return await SecureStore.getItemAsync(TOKEN_KEY);
      }
    } catch (e) {
      console.error("Error getting access token:", e);
      return null;
    }
  },

  getRefreshToken: async (): Promise<string | null> => {
    try {
      if (isWeb) {
        return localStorage.getItem(REFRESH_TOKEN_KEY);
      } else {
        return await SecureStore.getItemAsync(REFRESH_TOKEN_KEY);
      }
    } catch (e) {
      console.error("Error getting refresh token:", e);
      return null;
    }
  },

  clear: async () => {
    try {
      if (isWeb) {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(REFRESH_TOKEN_KEY);
      } else {
        await SecureStore.deleteItemAsync(TOKEN_KEY);
        await SecureStore.deleteItemAsync(REFRESH_TOKEN_KEY);
      }
    } catch (e) {
      console.error("Error clearing tokens:", e);
    }
  },
};