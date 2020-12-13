<template>
  <div class="delete-button">
    <button class="btn" @click="$emit('clicked')">
      <i class="mdi mdi-close"></i>
    </button>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style>
.delete-button .btn {
  border: none;
  background: none;
  cursor: pointer;
  font-size: 2rem;
  color: var(--color-primary);
}
.delete-button .btn:hover {
  color: var(--color-primary-dark);
}
.delete-button .btn:focus {
  outline-style: none;
  color: var(--color-primary-dark);
}
</style>
