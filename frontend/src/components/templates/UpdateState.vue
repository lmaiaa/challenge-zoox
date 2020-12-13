<template>
  <div class="update-state__box">
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
    <div class="inputs" v-if="stateSelect.value.name !== ''">
      <h3>ALETERE AS INFORMAÇÕES</h3>
      <input-default
        title="Nome   Ex.: Rio de Janeiro"
        required
        v-model="stateName"
      />
      <input-default
        title="Inciais   Ex.: RJ, SP, MG ... "
        required
        v-model="stateInitials"
      />
    </div>
    <button-custom name="SALVAR" @clicked="updateState" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  reactive,
  ref,
} from "@vue/composition-api";
import { State } from "../../store";
import { IState } from "../../types";
import ButtonCustom from "../buttons/Button.vue";
import InputDefault from "../inputs/InputDefault.vue";
import ComboboxDefault from "../selects/Combobox.vue";

export default defineComponent({
  components: { ComboboxDefault, InputDefault, ButtonCustom },
  setup() {
    const stateName = ref("");
    const stateInitials = ref("");
    const states = State.getters.allStates;
    const state = ref("");
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
      stateName.value = stateSelect.value.name.toUpperCase();
      stateInitials.value = stateSelect.value.initials.toUpperCase();
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
    const updateState = async () => {
      await State.actions.updateState(stateSelect.value._id, {
        name: stateName.value,
        initials: stateInitials.value,
      });
    };
    return {
      states,
      state,
      stateDisabled,
      stateSelect,
      toggleSelectState,
      searchState,
      stateName,
      stateInitials,
      updateState,
    };
  },
});
</script>

<style lang="scss">
.update-state__box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .fider-state__combobox {
    display: flex;
    align-items: baseline;
    i {
      color: var(--color-primary);
      padding: 10px;
      cursor: pointer;
    }
  }
  .inputs {
    padding: 20px;
  }
  input {
    margin: 10px;
  }
}
</style>
