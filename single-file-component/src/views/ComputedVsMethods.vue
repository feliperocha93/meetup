<template>
  <div>
    <h2>O seu saldo é: <strong v-html="balance"></strong></h2>
    <span>Saque disponível: {{ calculate }}</span>
  </div>
</template>

<script>
export default {
  name: "ComputedVsMethods",
  props: {
    balance: {
      type: Number,
    },
    tax: {
      type: Number,
    },
  },
  computed: {
    calculate() {
      return this.balance * 100 - this.tax;
    },
  },
};
</script>
