<template>
  <div class="combobox-box">
    <input
      :list="'options' + title"
      name="combobox"
      class="combobox"
      :value="value"
      :placeholder="title"
      @input="$emit('input', $event.target.value)"
      @change="$emit('changed')"
      :disabled="disabled"
    />
    <datalist :id="'options' + title" v-if="list.length">
      <option
        v-for="item in list"
        :value="item.name.toUpperCase()"
        :key="item._id"
        @click="$emit('select')"
      >
        {{ item.initials ? item.initials.toUpperCase() : "" }}
      </option>
    </datalist>
    <datalist v-else>
      <option value="A lista está vazia" disabled></option>
    </datalist>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    title: { type: String },
    select: {
      type: String,
    },
    list: { type: Array },
    value: { type: String },
    disabled: { type: Boolean, default: false },
  },
});
</script>
<style lang="scss">
.combobox-box {
  .combobox {
    height: 50px;
    border-radius: 50px;
    min-width: 265px;
    opacity: 1;
    border: 0.2px solid var(--color-input-border);
    background: var(--color-input-background);
    text-indent: 10px;
    &:focus {
      outline-style: none;
      border-color: #393939;
    }
    &:disabled {
      background: rgba(108, 120, 122, 0.4);
    }
  }
}
</style>
