<template>
  <div>
    <h2>Plataformas para saque:</h2>
    <ul>
      <li v-for="platform in platformsList" :key="platform">
        {{ platform }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ComputedVsWatchers",
  data: () => ({
    platforms: ["Idai", "Box", "DD"],
    platformsFree: ["Nuwance", "6C", "Intra"],
  }),
  computed: {
    platformsList() {
      return [...this.platforms, ...this.platformsFree];
    },
  },
};
</script>
