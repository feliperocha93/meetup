<template>
  <section id="componente-single-file">
    <article class="card">
      <ComputedProperties
        :firstName="firstName"
        :lastName="lastName"
        class="container"
      />
    </article>

    <article class="card">
      <ComputedVsMethods class="container" />
    </article>

    <article class="card">
      <ComputedVsWatchers class="container" />
    </article>

    <article class="card">
      <UsingVuex />
    </article>
  </section>
</template>

<script>
import ComputedProperties from "./components/ComputedProperties.vue";
import ComputedVsMethods from "./components/ComputedVsMethods.vue";
import ComputedVsWatchers from "./components/ComputedVsWatchers.vue";
import UsingVuex from "./components/UsingVuex.vue";

export default {
  name: "App",
  components: {
    ComputedProperties,
    ComputedVsMethods,
    ComputedVsWatchers,
    UsingVuex,
  },
  data: () => ({
    title: "Componente Single File",
    text: "Este é um componente single file.",
    firstName: "Felipe",
    lastName: "Lucena",
  }),
};
</script>

<style lang="css">
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

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  width: 300px;
  margin: 20px auto;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
}
</style>
