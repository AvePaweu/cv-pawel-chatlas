<template>
  <nav class="navbar sticky-top navbar-dark bg-primary d-print-none">
    <div class="container-fluid">
      <a class="navbar-brand text-center">CV Paweł Chatłas</a>
      <div class="d-inline">
        <li class="nav-item navbar-text" @click="setLang('pl')">
          <country-flag country="pl" :shadow="true" />
          <span :class="{ active: isSetLang('pl') }">PL</span>
        </li>
        <li class="nav-item navbar-text" @click="setLang('en')">
          <country-flag country="gb" :shadow="true" />
          <span :class="{ active: isSetLang('en') }">EN</span>
        </li>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    isSetLang(lang) {
      return this.$i18n.locale === lang;
    },
    setLang(lang) {
      localStorage.setItem("cv_PC", lang);
      this.$i18n.locale = lang;
      console.log(this.$i18n.locale);
    },
  },
};
</script>

<style scoped>
li {
  list-style-type: none;
  display: inline;
}

.active {
  color: orange;
  font-weight: bold;
}

nav {
  box-shadow: 3px 3px 5px grey;
}
</style>
