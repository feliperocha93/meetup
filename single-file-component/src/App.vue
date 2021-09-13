<template>
  <section id="componente-single-file">
    <article>
      <input type="text" v-model="balance" />
    </article>

    <article>
      <ComputedProperties :firstName="firstName" :lastName="lastName" />
    </article>

    <article>
      <ComputedVsMethods :balance="balance" :tax="tax" />
    </article>

    <article>
      <ComputedVsWatchers />
    </article>
  </section>
</template>

<script>
import ComputedProperties from "./views/ComputedProperties.vue";
import ComputedVsMethods from "./views/ComputedVsMethods.vue";
import ComputedVsWatchers from "./views/ComputedVsWatchers.vue";

export default {
  name: "App",
  components: {
    ComputedProperties,
    ComputedVsMethods,
    ComputedVsWatchers,
  },
  data: () => ({
    title: "Componente Single File",
    text: "Este é um componente single file.",
    firstName: "Felipe",
    lastName: "Lucena",
    balance: 10000,
    tax: 0.5,
  }),
};
</script>

<style>
#componente-single-file {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
