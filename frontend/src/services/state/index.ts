import { IState, state } from "@/types";
import { api } from "@/utils/api/api.instance";

export const getAllState = async (): Promise<IState[]> => {
  return await api.get("/state");
};

export const createState = async (data: state): Promise<IState> => {
  return await api.post("/state", data);
};

export const updatedState = async (
  id: string,
  data: state
): Promise<IState> => {
  return await api.put(`/state/${id}`, data);
};
