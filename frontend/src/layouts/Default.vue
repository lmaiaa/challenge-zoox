<template>
  <div class="default" ref="default">
    <header class="top-bar">
      <div class="top-bar__logo" @click="$router.push('/')">
        <img
          :src="
            $route.path.split('/')[1] === ''
              ? 'https://zooxsmart.com/wp-content/themes/zoox/img/logo.svg'
              : 'https://zooxsmart.com/wp-content/themes/zoox/img/logo-menu-fixed.svg'
          "
        />
      </div>
      <div
        :class="
          $route.path.split('/')[1] === ''
            ? 'navigation__buttons home'
            : 'navigation__buttons'
        "
      >
        <span
          v-if="$route.path.split('/')[1] !== 'finder'"
          class="mdi mdi-magnify navigation"
          @click="$router.push('/finder')"
          >BUSCADOR</span
        >
        <span
          class="mdi mdi-plus-circle-outline navigation"
          @click="$refs.registerState.openModal()"
          >CRIAR ESTADO</span
        >
        <span
          class="mdi mdi-plus-circle-outline navigation"
          @click="$refs.registerCity.openModal()"
          >CRIAR CIDADE</span
        >
        <span
          class="mdi mdi-pencil navigation"
          @click="$refs.updateState.openModal()"
          >EDITAR ESTADO</span
        >
      </div>
      <div class="modal">
        <modal ref="registerState">
          <template v-slot:header>
            <h1>Criar novo estado</h1>
          </template>
          <template v-slot:body>
            <register-state />
          </template>
        </modal>
      </div>
      <div class="modal">
        <modal ref="registerCity">
          <template v-slot:header>
            <h1>Criar nova cidade</h1>
          </template>
          <template v-slot:body>
            <register-city />
          </template>
        </modal>
      </div>
      <div class="modal">
        <modal ref="updateState">
          <template v-slot:header>
            <h1>Editar Estado</h1>
          </template>
          <template v-slot:body>
            <update-state />
          </template>
        </modal>
      </div>
    </header>
    <div class="container"><router-view></router-view></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import Modal from "../components/modals/Modal.vue";
import RegisterState from "../components/templates/RegisterState.vue";
import RegisterCity from "../components/templates/RegisterCity.vue";
import UpdateState from "../components/templates/UpdateState.vue";
export default defineComponent({
  components: {
    Modal,
    RegisterState,
    RegisterCity,
    UpdateState,
  },
});
</script>

<style lang="scss">
.default {
  width: 100%;
  height: 100%;
  .container {
    width: 100%;
    height: 100%;
  }
  .top-bar {
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .top-bar__logo {
      margin: 10px;
      cursor: pointer;
    }
    .navigation__buttons {
      width: 100%;
      padding: 10px;
      display: flex;
      justify-content: flex-end;
      .navigation {
        font-size: 2rem;
        margin: 10px;
        color: var(--color-primary);
        cursor: pointer;
        &:hover {
          font-weight: 700;
        }
      }
    }
    .navigation__buttons.home {
      .navigation {
        color: #ffffff;
      }
    }
    .create-state__template,
    .create-new-city {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      input {
        margin: 10px;
      }
      .fider-state__combobox {
        display: flex;
        align-items: baseline;
        i {
          color: var(--color-primary);
          padding: 10px;
          cursor: pointer;
        }
      }
    }
  }
  .box__button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    button {
      color: #ffffff;
      min-height: 40px;
    }
  }
}
</style>
