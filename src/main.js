import { createApp } from "vue";
import App from "./App.vue";
import VueCountryFlag from "vue-country-flag-next";
import { createI18n } from "vue-i18n";

import "bootstrap/dist/css/bootstrap.min.css";
import "@mdi/font/css/materialdesignicons.min.css";

const messages = {
  en: {
    Position: "Position",
    Duties: "Scope of duties",
    Projects: "Notable projects",
    Field: "Field",
    Specialization: "Specialization",
    GivenTitle: "Given title",
    WorkExperience: "Work experience",
    Education: "Education",
    Skills: "Skills",
    Languages: "Languages",
    Hobbies: "Hobbies",
    Others: "Others",
    PrintMe: "Print me!",
    GDPR: "I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).",
  },
  pl: {
    Position: "Stanowisko",
    Duties: "Zakres obowiązków",
    Projects: "Znaczące projekty",
    Field: "Kierunek",
    Specialization: "Specjalizacja",
    GivenTitle: "Uzyskany tytuł",
    WorkExperience: "Doświadczenie zawodowe",
    Education: "Wykształcenie",
    Skills: "Umiejętności",
    Languages: "Języki",
    Hobbies: "Zainteresowania",
    Others: "Pozostałe",
    PrintMe: "Wydrukuj mnie!",
    GDPR: "Wyrażam zgodę na przetwarzanie danych osobowych zawartych w niniejszym dokumencie do realizacji procesu rekrutacji zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).",
  },
};

const i18n = createI18n({
  locale: localStorage.getItem("cv_PC") ?? "en",
  fallbackLocale: "en",
  globalInjection: true,
  messages,
});

createApp(App)
  .component("country-flag", VueCountryFlag)
  .use(i18n)
  .mount("#app");
