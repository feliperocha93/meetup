<template>
  <div>
    <h2>Olá, {{ fullName }}</h2>
  </div>
</template>

<script>
export default {
  name: "ComputedProperties",
  props: {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
  },
};
</script>

<style scoped></style>
