<template>
  <div>
    <h2>O seu saldo é: <strong v-html="balance"></strong></h2>
    <span>Saque disponível: {{ balanceWithTax }}</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ComputedVsMethods",
  computed: {
    ...mapGetters(["balance", "balanceWithTax"]),
  },
};
</script>
