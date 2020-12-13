import { ICity, city } from "@/types";
import { api } from "@/utils/api/api.instance";

export const getAllCitiesOfState = async (id: string): Promise<ICity[]> => {
  return await api.get(`/city/${id}`);
};

export const createCityOfState = async (
  id: string,
  data: city
): Promise<ICity> => {
  return await api.post(`/city/${id}`, data);
};
