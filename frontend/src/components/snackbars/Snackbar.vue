<template>
  <div
    class="snackbar"
    v-if="status"
    :style="'background-color:' + snackbar.color"
  >
    <p class="snackbar-text">
      {{ snackbar.text }}
    </p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    snackbar: {
      type: Object,
      required: true,
    },
    timeout: { type: Number },
  },
  setup(props) {
    function setTimer() {
      setTimeout(() => {
        props.snackbar.status = false;
      }, props.timeout || 2000);
    }
    const status = computed(() => {
      setTimer();
      return props.snackbar.status;
    });

    return { status };
  },
});
</script>
<style lang="scss">
.snackbar {
  display: flex;
  flex-direction: column;

  max-width: 500px;

  min-height: 50px;
  min-width: 300px;

  position: fixed;
  z-index: 9999;
  top: 90%;

  border-radius: 10px;
  justify-content: center;
}
.snackbar-text {
  padding: 10px;
  text-align: center;
  color: #ffffff;
}
</style>
