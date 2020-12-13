<template>
  <div id="app">
    <Snackbar :snackbar="snackbar" />
    <router-view></router-view>
    <global />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import Snackbar from "./components/snackbars/Snackbar.vue";
import Global from "./Global.vue";
import { Notifications } from "./store";
export default defineComponent({
  components: { Global, Snackbar },
  setup() {
    const snackbar = Notifications.getters.getStateNotification;
    return { snackbar };
  },
});
</script>

<style lang="scss"></style>
