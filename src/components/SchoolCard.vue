<template>
  <div class="card mx-3">
    <div class="row">
      <div class="col-4">
        <img :src="getLogo" class="card-img-top m-4" :alt="getName" />
      </div>
      <div class="col-8">
        <div class="card-body">
          <h5 class="card-title">{{ getName }}</h5>
          <div class="row">
            <div class="col-6">
              <h6 class="card-subtitle text-center text-muted">
                {{ school.location }}
              </h6>
            </div>
            <div class="col-6">
              <h6 class="card-subtitle text-center text-muted">
                {{ school.years }}
              </h6>
            </div>
          </div>

          <p class="card-text">
            <strong>{{ $t("Field") }}:</strong> {{ getField }}<br />
            <strong>{{ $t("Specialization") }}:</strong> {{ getSpecialization
            }}<br />
            <strong>{{ $t("GivenTitle") }}:</strong> {{ getTitle }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SchoolCard",
  props: ["school"],
  computed: {
    getName() {
      return this.school.name[this.currentLang];
    },
    getLogo() {
      return require(`@/assets/${this.school.logo}`);
    },
    getField() {
      return this.school.field[this.currentLang];
    },
    getSpecialization() {
      return this.school.specialization[this.currentLang];
    },
    getTitle() {
      return this.school.givenTitle[this.currentLang];
    },
    currentLang() {
      return this.$i18n.locale;
    },
  },
};
</script>

<style scoped>
.card {
  page-break-inside: avoid;
}
</style>

<i18n>
    {
        en: {
            Field: "Field",
            Specialization: "Specialization",
            Given title: "Given title"
        },
        pl: {
            Field: "Kierunek",
            Specialization: "Specjalizacja",
            Given title: "Uzyskany tytuł"
        }
    }
</i18n>
