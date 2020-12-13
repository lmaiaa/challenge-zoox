import { createCityOfState, getAllCitiesOfState } from "@/services/city";
import { computed, reactive } from "@vue/composition-api";
import * as Types from "@/types";
import { Notifications } from "..";

export const state = reactive<Types.IStateCity>({
  citiesOfState: [
    {
      _id: "",
      name: "",
      _stateId: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
});

export const getters = {
  allCitiesOfState: computed(() => state.citiesOfState),
};

export const mutations = {
  SET_CITIES: (states: Types.ICity[]) => {
    state.citiesOfState = states;
  },
  ADD_CITIES: (city: Types.ICity) => {
    state.citiesOfState.push(city);
  },
};

export const actions = {
  getAllCitiesOfState: async (stateId: string) => {
    const citiesResponse = await getAllCitiesOfState(stateId);
    if (citiesResponse) {
      console.log(citiesResponse);
      mutations.SET_CITIES(citiesResponse);
    }
  },
  createCity: async (stateId: string, city: Types.city) => {
    const stateResponse = await createCityOfState(stateId, city);
    if (stateResponse) {
      mutations.ADD_CITIES(stateResponse);
      Notifications.actions.showNotification({
        text: "Cidade criada com Sucesso",
        color: "var(--color-success)",
      });
    }
  },
};
