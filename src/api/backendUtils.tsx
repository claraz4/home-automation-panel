import axios from "axios";
import { api, householdApi } from "./api";

export async function detectBackend() {
  try {
    await axios.get(`${import.meta.env.VITE_BACKEND_URL!}/health`, {
      timeout: 2000,
    });

    setBackend(true);
  } catch (error) {
    setBackend(false);
  }
}

function setBackend(isLocal: boolean) {
  if (isLocal) {
    api.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
    householdApi.defaults.baseURL = `${import.meta.env.VITE_BACKEND_URL}/mains`;
  } else {
    api.defaults.baseURL = import.meta.env.VITE_REMOTE_BACKEND_URL;
    householdApi.defaults.baseURL = `${import.meta.env.VITE_REMOTE_BACKEND_URL}/mains`;
  }
}
