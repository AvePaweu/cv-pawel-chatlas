<template>
  <div class="card mx-3 pt-3">
    <ul class="list">
      <li v-for="h in hobbies" :key="h">
        <i class="mdi" :class="getIcon(h)" /> {{ getHobby(h) }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HobbyCard",
  props: ["hobbies"],
  methods: {
    getIcon(hobby) {
      return `mdi-${hobby.icon}`;
    },
    getHobby(hobby) {
      return hobby[this.$i18n.locale];
    },
  },
};
</script>

<style scoped>
.list {
  list-style-type: none;
}
</style>
