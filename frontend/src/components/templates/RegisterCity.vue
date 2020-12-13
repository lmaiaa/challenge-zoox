<template>
  <div class="create-new-city">
    <div class="finder-state">
      <div class="fider-state__title">
        <h3>ESCOLHA O ESTADO</h3>
      </div>
      <div class="fider-state__combobox">
        <combobox-default
          title="Busque pelo estado"
          :list="states"
          @input="searchState"
          v-model="state"
          :disabled="stateDisabled"
          @changed="toggleSelectState"
        />
        <i
          v-if="stateDisabled"
          @click="toggleSelectState(), (stateSelect.value = {}), (state = '')"
          class="mdi mdi-pencil"
          >Alterar Estado</i
        >
      </div>
    </div>
    <div class="input-city" v-if="stateSelect.value.name !== ''">
      <div class="input-city_title">
        <h3>CIDADE</h3>
      </div>
      <input-default
        title="Nome   Ex.: Rio de Janeiro"
        required
        v-model="cityName"
      />
    </div>
    <button-custom name="SALVAR" @clicked="saveCity" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  reactive,
  ref,
} from "@vue/composition-api";
import { City, State } from "../../store";
import { IState } from "../../types";
import ButtonCustom from "../buttons/Button.vue";
import InputDefault from "../inputs/InputDefault.vue";
import ComboboxDefault from "../selects/Combobox.vue";

export default defineComponent({
  components: { ComboboxDefault, InputDefault, ButtonCustom },
  setup() {
    const states = State.getters.allStates;
    const state = ref("");
    const cityName = ref("");
    const stateDisabled = ref(false);
    const stateSelect = reactive<{ value: IState }>({
      value: {
        _id: "",
        name: "",
        initials: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    onMounted(async () => {
      if (states.value[0].name == "") {
        await State.actions.getAllStates();
      }
    });
    const toggleSelectState = () => {
      stateDisabled.value = !stateDisabled.value;
    };
    const searchState = async () => {
      for (let i = 0; i < states.value.length; i++) {
        if (
          states.value[i].name.toUpperCase() === state.value ||
          states.value[i].initials === state.value
        ) {
          stateSelect.value = states.value[i];
        }
      }
    };

    const saveCity = async () => {
      await City.actions.createCity(stateSelect.value["_id"], {
        name: cityName.value,
      });
    };
    return {
      states,
      state,
      cityName,
      stateDisabled,
      stateSelect,
      toggleSelectState,
      searchState,
      saveCity,
    };
  },
});
</script>

<style></style>
