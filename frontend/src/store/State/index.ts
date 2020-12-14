import Vue from "vue";
import { createState, getAllState, updatedState } from "@/services/state";
import * as Types from "@/types";
import VueCompositionAPI, { reactive, computed } from "@vue/composition-api";
import { Notifications } from "..";
Vue.use(VueCompositionAPI);

export const state = reactive<Types.IStateStates>({
  allStates: [
    {
      _id: "",
      name: "",
      initials: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
});

export const getters = {
  allStates: computed(() => state.allStates),
};

export const mutations = {
  SET_STATES: (states: Types.IState[]) => {
    state.allStates = states;
  },
  ADD_STATE: (State: Types.IState) => {
    state.allStates.push(State);
  },
  UPDATE_STATE: (newState: Types.IState) => {
    const oldState = state.allStates.find((s) => s._id === newState._id);
    if (oldState) {
      oldState.name = newState.name;
      oldState.initials = newState.initials;
    }
  },
};

export const actions = {
  getAllStates: async () => {
    const states = await getAllState();
    mutations.SET_STATES(states);
  },
  createState: async (state: Types.state) => {
    const stateResponse = await createState(state);
    if (stateResponse) {
      mutations.ADD_STATE(stateResponse);
      Notifications.actions.showNotification({
        text: "Estado Criado com Sucesso",
        color: "var(--color-success)",
      });
    }
  },
  updateState: async (id: string, updates: Types.state) => {
    const stateResponse = await updatedState(id, updates);
    if (stateResponse) {
      mutations.UPDATE_STATE({
        _id: stateResponse._id,
        ...updates,
        updatedAt: stateResponse.updatedAt,
        createdAt: stateResponse.createdAt,
      });
      Notifications.actions.showNotification({
        text: "Estado atualizado com Sucesso",
        color: "var(--color-success)",
      });
    }
  },
};
