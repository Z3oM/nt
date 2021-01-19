<template>
  <div class="alert-form" :style="'display:' + show">
    <div class="form-inputs">
      <div class="top-block-btn">
        <button type="button">X</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["show"],
  data() {
    return {};
  },
  methods: {
    GetToken(login, password) {
      let L = login;
      let P = password;

      // Залипуха
      this.$store.commit("setTokenBearer", L + P);
    },
  },
};
</script>