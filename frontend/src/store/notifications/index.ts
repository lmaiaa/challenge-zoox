import { reactive } from "@vue/composition-api";

import { computed } from "@vue/composition-api";
import * as Types from "@/types";

//state
const state = reactive({
  snackbar: { status: false },
});

//action
const actions = {
  showNotification: (notification: Types.Notification): void => {
    state.snackbar = {
      ...notification,
      status: true,
    };
  },
};

//getter
const getters = { getStateNotification: computed(() => state.snackbar) };

export { state, getters, actions };
