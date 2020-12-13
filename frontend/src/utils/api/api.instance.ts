import { Notifications } from "@/store";
import axios, { AxiosError } from "axios";
//import * as Types from '@/types';
//import authHeader from './auth-header';

export const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

const onError = (error: AxiosError) => {
  if (error.response?.status === 500) {
    const firstError = Object.entries(error.response.data[0].constraints);
    Notifications.actions.showNotification({
      text: firstError[0].join(": "),
      color: "var(--color-error)",
    });
  } else {
    Notifications.actions.showNotification({
      text: "Ocorreu um erro desconhecido, contate o suporte",
      color: "var(--color-error)",
    });
  }
  //emitir alerta de error
};

api.interceptors.response.use(({ data }) => data, onError);

export default { api };
