<template>
  <div class="home">
    <div class="container__video">
      <video
        autoplay
        muted
        loop
        src="https://zooxsmart.com/wp-content/uploads/2019/09/fundosite-1.mp4"
        type="video/mp4"
      ></video>
    </div>
    <div class="container__message">
      <h1>DATA IS EVERYTHING</h1>
      <p>
        Entendemos o comportamento e ajudamos na experiência das pessoas em
        ambientes físicos.
      </p>
      <button-custom
        name="CONHEÇA O BUSCADOR DE ESTADOS/CIDADES"
        @clicked="$router.push('/finder')"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import ButtonCustom from "../components/buttons/Button.vue";

export default defineComponent({
  name: "Home",
  components: { ButtonCustom },
});
</script>
<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  color: #ffffff;
  .container__video {
    width: 100%;
    height: 100%;
    video {
      position: fixed;
      z-index: 0;
      right: 0;
      bottom: 0;
      min-width: 100%;
      min-height: 100%;
      object-fit: fill;
    }
  }
  .container__message {
    position: fixed;
    top: 40%;
    right: 25%;
    z-index: 1;
    font-size: 2.5rem;
    width: auto;
    text-align: center;
    padding: 20px;
    h1,
    p,
    button {
      margin: 10px;
    }
  }
}
@media (max-width: 1400px) {
  .container__message {
    right: 10% !important;
  }
}
@media (max-width: 1050px) {
  .container__message {
    right: 0 !important;
  }
}
</style>
