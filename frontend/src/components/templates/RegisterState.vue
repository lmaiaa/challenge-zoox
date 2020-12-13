<template>
  <div class="create-state__template">
    <div class="inputs">
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
    <button-custom name="SALVAR" @clicked="saveState" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { State } from "../../store";
import ButtonCustom from "../buttons/Button.vue";
import InputDefault from "../inputs/InputDefault.vue";

export default defineComponent({
  components: { ButtonCustom, InputDefault },
  setup() {
    const stateName = ref("");
    const stateInitials = ref("");
    const saveState = async () => {
      await State.actions.createState({
        name: stateName.value,
        initials: stateInitials.value,
      });
    };
    return { stateName, stateInitials, saveState };
  },
});
</script>

<style></style>
