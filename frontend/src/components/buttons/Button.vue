<template>
  <div class="box__button">
    <button class="button__custom" @click="$emit('clicked')">{{ name }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "ButtonCustom",
  props: {
    name: { type: String, required: true },
  },
});
</script>

<style lang="scss">
.box__button {
  .button__custom {
    min-height: 65px;
    min-width: 200px;
    width: auto;
    border-radius: 50px;
    border: 0;
    font-weight: 700;
    background: var(--color-primary);
    transition: color 0.2s;
    padding-left: 20px;
    padding-right: 20px;
    cursor: pointer;
    &:focus {
      outline-style: none;
    }
    &:hover {
      background: var(--color-primary-dark);
    }
  }
}
</style>
