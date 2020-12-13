<template>
  <div class="input-block">
    <input
      :placeholder="title"
      :style="stylization"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @change="$emit('changed')"
      :required="required"
      :disabled="disable"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    value: { type: String || Number },
    title: { type: String, required: true },
    width: { type: String },
    required: { type: Boolean },
    disable: { type: Boolean },
  },
  setup(props) {
    const stylization = computed(() => {
      return {
        width: `${props.width || 265}px`,
        background: `${
          props.disable ? "#e4dddd" : "var(--color-input-background)"
        }`,
      };
    });
    return { stylization };
  },
});
</script>

<style lang="scss">
.input-block {
  input {
    height: 50px;
    border-radius: 50px;
    opacity: 1;
    border: 0.2px solid var(--color-input-border);
    background: var(--color-input-background);
    text-indent: 16px;

    &:focus {
      outline-style: none;
      border-color: #393939;
    }
    &:focus:required:invalid {
      outline-style: none;
      border-color: red;
    }
    &:focus:required:valid {
      outline-style: none;
      border-color: green;
    }
    &::placeholder {
      font-size: 1.5rem;
      color: var(--color-text-placeholder);
    }
  }
}
</style>
