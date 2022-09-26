<template>
  <div class="card mx-3 d-print-block">
    <div class="card-body">
      <h5 class="text-center card-title">
        <template v-for="(flag, index) in language.flags" :key="flag">
          <span>
            <country-flag :country="flag" :shadow="true" /><span
              v-if="index < language.flags.length - 1"
              >&#47;</span
            ></span
          >
        </template>
        {{ getLanguage }}
      </h5>
      <p class="card-text">{{ getLevel }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LanguageCard",
  props: ["language"],
  computed: {
    currentLang() {
      return this.$i18n.locale;
    },
    getLanguage() {
      return this.language.name[this.currentLang];
    },
    getLevel() {
      return this.language.level[this.currentLang];
    },
  },
};
</script>

<style scoped>
.card {
  page-break-before: avoid;
  page-break-inside: avoid;
}

@media print {
  h5 > span {
    display: none;
  }
}
</style>
