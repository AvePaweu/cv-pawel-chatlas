<template>
  <div class="card mx-3">
    <div class="card-body">
      <h5 class="card-title text-center">
        <template v-for="(icon, index) in skill.icons" :key="icon">
          <i class="mdi" :class="getIcon(icon)" /><span
            v-if="index < skill.icons.length - 1"
            >&#47;</span
          >
        </template>
        {{ getName }}
      </h5>
      <p class="card-text">{{ getDetails }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillCard",
  props: ["skill"],
  methods: {
    getIcon(icon) {
      return `mdi-${icon}`;
    },
  },
  computed: {
    getDetails() {
      return this.skill.details[this.currentLang];
    },
    getName() {
      return this.skill.name[this.currentLang];
    },
    currentLang() {
      return this.$i18n.locale;
    },
  },
};
</script>
