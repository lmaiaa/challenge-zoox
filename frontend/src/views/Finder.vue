<template>
  <div class="finder__container">
    <div class="header">
      <div class="header__title">
        <h1>BUSCADOR DE CIDADES/ESTADOS</h1>
      </div>
    </div>
    <div class="container">
      <div class="finder-state">
        <div class="fider-state__title">
          <h3>ESTADO</h3>
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
            @click="
              toggleSelectState(),
                (stateSelect = ''),
                (state = ''),
                (city = ''),
                (citySelect = '')
            "
            class="mdi mdi-pencil"
            >Alterar Estado</i
          >
        </div>
        <div class="state-select" v-if="stateSelect">
          <span>Sigla: {{ stateSelect.initials.toUpperCase() }}</span>
        </div>
      </div>
      <div class="finder-city" v-if="stateSelect !== ''">
        <div class="cities" v-if="cities.length">
          <div class="fider-city__title">
            <h3>CIDADE</h3>
          </div>
          <div class="fider-city__combobox">
            <combobox-default
              :list="cities"
              title="Busque pela cidade"
              @input="searchCity"
              v-model="city"
              :disabled="cityDisabled"
              @changed="toggleSelectCity"
            />
            <i
              v-if="cityDisabled"
              @click="toggleSelectCity"
              class="mdi mdi-pencil"
              >Alterar Cidade</i
            >
          </div>
        </div>
        <div class="no-cities" v-else>
          <h3>Não há cidades cadastradas nesse estado</h3>
          <button-default name="CADASTRE A CIDADE AQUI" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "@vue/composition-api";
import ButtonDefault from "../components/buttons/Button.vue";

import ComboboxDefault from "../components/selects/Combobox.vue";
import { City, State } from "../store";

export default defineComponent({
  components: { ComboboxDefault, ButtonDefault },
  setup() {
    const state = ref("");
    const states = State.getters.allStates;
    const stateSelect = ref("");
    const city = ref("");
    const cities = City.getters.allCitiesOfState;
    const citySelect = ref("");
    const stateDisabled = ref(false);
    const cityDisabled = ref(false);
    onMounted(async () => {
      if (states.value[0].name == "") {
        await State.actions.getAllStates();
      }
    });

    const toggleSelectState = () => {
      console.log("aqui");
      stateDisabled.value = !stateDisabled.value;
    };
    const toggleSelectCity = () => {
      cityDisabled.value = !cityDisabled.value;
    };
    const searchState = async () => {
      console.log(state.value);
      for (let i = 0; i < states.value.length; i++) {
        if (
          states.value[i].name.toUpperCase() === state.value ||
          states.value[i].initials.toUpperCase() === state.value
        ) {
          stateSelect.value = states.value[i];
          await City.actions.getAllCitiesOfState(stateSelect.value["_id"]);
        }
      }
    };
    const searchCity = () => {
      for (let i = 0; i < cities.value.length; i++) {
        if (
          cities.value[i].name === city.value ||
          cities.value[i].initials === city.value
        ) {
          citySelect.value = cities.value[i];
        }
      }
    };

    return {
      states,
      searchState,
      stateSelect,
      state,
      city,
      cities,
      citySelect,
      searchCity,
      stateDisabled,
      cityDisabled,
      toggleSelectState,
      toggleSelectCity,
    };
  },
});
</script>

<style lang="scss">
.finder__container {
  width: 100%;
  height: 90%;
  background: url(https://zooxsmart.com/wp-content/themes/zoox/img/textura.svg)
    no-repeat 0 0 !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10%;
  .header {
    padding: 20px;
  }
  .container {
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
    input {
      margin-top: 10px;
      min-width: 300px;
    }
    .fider-state__combobox,
    .fider-city__combobox {
      display: flex;
      align-items: baseline;
      i {
        color: var(--color-primary);
        padding: 10px;
        cursor: pointer;
      }
    }
    .finder-city {
      padding: 20px 0;
    }
  }
}
</style>
