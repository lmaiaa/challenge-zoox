<template>
  <div></div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Global",
});
</script>

<style lang="scss">
:root {
  --color-background: #e5e6ea;
  --color-text-base: #6c787a;
  --color-primary: #27bed5;
  --color-primary-dark: #23abbf;
  --color-input-background: #f8f8f8;
  --color-input-border: #b3b3b3;
  --color-text-placeholder: #b3b3b3;
  --color-error: #e84258;
  --color-success: #02cc60;

  font-size: 60%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
  width: 100%;
}

#app {
  display: flex;
  justify-content: center;
}
body,
input,
button,
textarea {
  font: 500 1.6rem Roboto;
  color: var(--color-text-base);
}
@media (min-width: 700px) {
  :root {
    font-size: 62.5%;
  }
}
</style>
