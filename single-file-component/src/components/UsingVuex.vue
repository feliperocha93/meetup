<template>
  <div class="flexbox">
    <div class="flex-item">
      <input type="text" />
      <button @click="deposit">Depositar</button>
    </div>
    <div class="flex-item">
      <input type="text" />
      <button @click="withdraw">Sacar</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "UsingVuex",
  methods: {
    ...mapActions({
      deposit: "deposit",
      withdraw: "withdraw",
    }),
  },
};
</script>

<style>
.flexbox {
  display: flex;
  flex-direction: column;
}

.flex-item {
  margin: 10px 0;
}

button {
  width: 100px;
}
</style>
