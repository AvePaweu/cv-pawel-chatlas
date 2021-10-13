<template>
  <div class="card mx-3">
    <div class="row">
      <div class="col-4">
        <img :src="getLogo" class="card-img-top m-4" :alt="work.name" />
      </div>
      <div class="col-8">
        <div class="card-body">
          <h5 class="card-title">{{ work.name }}</h5>
          <div class="row">
            <div class="col">
              <h6 class="text-center card-subtitle text-muted">
                {{ work.location }}
              </h6>
            </div>
            <div class="col">
              <h6 class="text-center card-subtitle text-muted">
                {{ work.years }}
              </h6>
            </div>
          </div>

          <p class="card-text">
            <strong>{{ $t("Position") }}:</strong> {{ getPosition }}<br />
            <strong>{{ $t("Duties") }}:</strong> {{ getDuties }}<br />
            <strong>{{ $t("Projects") }}:</strong>
          </p>
          <ul class="list">
            <li v-for="p in work.projects" :key="p">
              {{ p[currentLang] }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkCard",
  props: ["work"],
  computed: {
    getPosition() {
      return this.work.position[this.currentLang];
    },
    getDuties() {
      return this.work.duties[this.currentLang];
    },
    getLogo() {
      return require(`@/assets/${this.work.logo}`);
    },
    currentLang() {
      return this.$i18n.locale;
    },
  },
};
</script>

<i18n>
{
    "pl": {
        "Position": "Stanowisko",
        "Duties": "Zakres obowiązków",
        "Projects": "Znaczące projekty"
    }, 
    "en": {
        "Position": "Position",
        "Duties": "Scope of duties",
        "Projects": "Notable projects"
    }
}
</i18n>
