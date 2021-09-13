<template>
  <div class="flexbox">
    <div class="flex-item">
      <input type="text" v-model="depositValue" />
      <button @click="deposit(depositValue)">Depositar</button>
    </div>
    <div class="flex-item">
      <input type="text" v-model="withdrawValue" />
      <button @click="withdraw(withdrawValue)">Sacar</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "UsingVuex",
  data: () => ({
    depositValue: 0,
    withdrawValue: 0,
  }),
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
