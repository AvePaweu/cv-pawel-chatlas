<template>
  <NavBar />
  <CurriculumVitae />
</template>

<script>
import CurriculumVitae from "./components/CurriculumVitae.vue";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: { CurriculumVitae, NavBar },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: rgba(255, 255, 248);
  margin-bottom: 20px;
}
</style>
