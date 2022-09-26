<template>
  <div class="container">
    <h1 class="text-center">{{ personal.name }}</h1>
    <p class="text-center">
      <i class="mdi mdi-cellphone" />
      {{ personal.mobile }}
      <span>&#59;</span>
      <i class="mdi mdi-at" />
      {{ personal.email }}
    </p>
    <div class="jumbotron">{{ getBio }}</div>
    <div class="row">
      <div class="col-lg-6">
        <h3 class="text-center">
          <i class="mdi mdi-briefcase" />
          {{ $t("WorkExperience") }}
        </h3>
        <work-card v-for="w in workExperience" :key="w" :work="w" />
        <hr />
        <h3 class="text-center">
          <i class="mdi mdi-school" />
          {{ $t("Education") }}
        </h3>
        <school-card v-for="e in education" :key="e" :school="e" />
      </div>
      <div class="col-lg-6">
        <h3 class="text-center">
          <i class="mdi mdi-xml" />
          {{ $t("Skills") }}
        </h3>
        <skill-card v-for="s in skills" :key="s" :skill="s" />
        <hr />
        <h3 class="text-center">
          <i class="mdi mdi-translate" />
          {{ $t("Languages") }}
        </h3>
        <language-card v-for="l in languages" :key="l" :language="l" />
        <hr />
        <h3 class="text-center">
          <i class="mdi mdi-chess-knight" />
          {{ $t("Hobbies") }}
        </h3>
        <hobby-card :hobbies="hobbies" />
        <hr />
        <h3 class="text-center">
          <i class="mdi mdi-dots-horizontal" />
          {{ $t("Others") }}
        </h3>
        <hobby-card :hobbies="other" />
      </div>
    </div>
    <div class="jumbotron">
      <small>{{ $t("GDPR") }}</small>
    </div>
    <div class="d-grid">
      <button class="btn btn-info d-print-none my-5" @click="printMe">
        <i class="mdi mdi-printer" />
        {{ $t("PrintMe") }}
      </button>
    </div>
  </div>
</template>

<script>
import HobbyCard from "./HobbyCard.vue";
import LanguageCard from "./LanguageCard.vue";
import SchoolCard from "./SchoolCard.vue";
import SkillCard from "./SkillCard.vue";
import WorkCard from "./WorkCard.vue";
export default {
  name: "CurriculumVitae",
  components: { WorkCard, SchoolCard, SkillCard, LanguageCard, HobbyCard },
  data() {
    return {
      personal: {
        name: "Paweł Chatłas",
        mobile: "+48 514 490 489",
        email: "pawelek90-90@o2.pl",
        bio: {
          pl: "Ambitny programista z 8-letnim doświadczeniem zawodowym w programowaniu aplikacji desktopowych i webowych z użyciem platformy .NET, wspieranej frameworkiem Angular w przypadku aplikacji webowych (wcześniej: AngularJS)",
          en: "Ambitious software developer with 8-years experience in developing of web and desktop applications, using .NET platform technologies with Angular (in the past: AngularJS)",
        },
      },
      workExperience: [
        {
          name: "SE Bordnetze Polska Sp. z o.o.",
          location: "Gorzów Wielkopolski",
          years: "X 2014 - ... (I 2023?)",
          logo: "sebnpl.jpg",
          position: {
            pl: "Starszy specjalista ds. programowania aplikacji",
            en: "Senior application programming specialist",
          },
          duties: {
            pl: "Rozwój aplikacji wspierających procesy HR, planowania produkcji oraz logistyczne w Grupie Sumitomo Electric Bordnetze",
            en: "Developing of new solutions to improve HR, production engineering and logistics processes in Sumitomo Electric Bordnetze Group",
          },
          projects: [
            {
              pl: "Rozmowa Roczna w SEBN PL i SEBN UA",
              en: "Annual Dialogue in SEBN PL and SEBN UA",
            },
            {
              pl: "Okresowe Oceny Pracownicze w SEBN PL i SEBN BG",
              en: "Periodical Employee Assessments in SEBN PL and SEBN BG",
            },
            {
              pl: "Ideenmanagement (zarządzanie wnioskami racjonalizatorskimi), pilot w SEBN PL",
              en: "Ideenmanagement (a system to manage rationalization ideas), pilot in SEBN PL",
            },
            {
              pl: "Giełda Pracownicza SEBN PL",
              en: "Employee stock market in SEBN PL",
            },
            {
              pl: "Module Execution System",
              en: "Module Execution System",
            },
          ],
        },
      ],
      education: [
        {
          name: {
            pl: "Państwowa Wyższa Szkoła Zawodowa (ob. Akademia Jakuba z Paradyża)",
            en: "The State University of Applied Sciences (now The Jacob of Paradise University)",
          },
          location: "Gorzów Wielkopolski",
          years: "IX 2010 - II 2014",
          logo: "pwsz.png",
          field: {
            pl: "Informatyka",
            en: "Computer Science",
          },
          specialization: {
            pl: "Technologie internetowe",
            en: "Web technologies",
          },
          givenTitle: {
            pl: "Inżynier informatyk",
            en: "Computer Sciences engineer",
          },
        },
        {
          name: {
            pl: "Technikum nr 7",
            en: "Technician High School no. 7",
          },
          location: "Gorzów Wielkopolski",
          years: "IX 2006 - V 2010",
          logo: "elektryk.png",
          field: {
            pl: "Technik informatyk",
            en: "Computer Science",
          },
          specialization: {
            pl: "Aplikacje internetowe",
            en: "Web applications",
          },
          givenTitle: {
            pl: "Technik informatyk",
            en: "Computer Sciences technician",
          },
        },
      ],
      skills: [
        {
          name: {
            pl: ".NET/.NET Core",
            en: ".NET/.NET Core",
          },
          icons: ["dot-net", "language-csharp"],
          details: {
            pl: "C#, .NET Core (od wersji 2.x do 6.x), MVC, WebApi, EntityFramework, Blazor, WPF, VB.NET (znajomość bierna)",
            en: "C#, .NET Core (versions 2.x to 6.x), MVC, WebApi, EntityFramework, Blazor, WPF, VB.NET (passive knowledge)",
          },
        },
        {
          name: {
            pl: "Technologie webowe",
            en: "Web technologies",
          },
          icons: ["language-javascript", "angular", "bootstrap"],
          details: {
            pl: "JavaScript, Angular (wraz z zewnętrznymi bibliotekami: ngx-translate), Bootstrap, HTML, CSS (podstawowy); w przeszłości: AngularJS, SemanticUI",
            en: "JavaScript, Angular (with third-party libraries: ngx-translate), Bootstrap, HTML, CSS (beginner); in the past: AngularJS, SemanticUI",
          },
        },
        {
          name: {
            pl: "Technologie bazodanowe",
            en: "Database Management Systems",
          },
          icons: ["database"],
          details: {
            pl: "SQL Server, MongoDB (dla własnego użytku: MySQL, SQLite, Postgres)",
            en: "SQL Server, MongoDB (for private purposes: MySQL, SQLite, Postgres)",
          },
        },
        {
          name: {
            pl: "Chętnie udoskonalę",
            en: "Willing to improve",
          },
          icons: ["head-lightbulb", "vuejs"],
          details: {
            pl: "VueJS, Vuex, Nuxt (ukończone kursy na Udemy, lecz brak doświadczenia zawodowego)",
            en: "VueJS, Vuex, Nuxt (accomplished courses on Udemy platform, but no commercial experience)",
          },
        },
        {
          name: {
            pl: "Pozostałe",
            en: "Others",
          },
          icons: ["language-php"],
          details: {
            pl: "Delphi, Pascal, PHP, Python (wszystkie wymienione nie praktykowane przez dłuższy czas)",
            en: "Delphi, Pascal, PHP, Python (all of them haven't practised for a longer time)",
          },
        },
      ],
      languages: [
        {
          name: { pl: "Angielski", en: "English" },
          flags: ["gb"],
          level: {
            pl: "średnio zaawansowany (lepiej pisany niż mówiony)",
            en: "intermediate (better written than spoken)",
          },
        },
        {
          name: { pl: "Niemiecki", en: "German" },
          flags: ["de"],
          level: {
            pl: "bardzo podstawowy (6 lat w szkole)",
            en: "very basic (6 years in school)",
          },
        },
        {
          name: { pl: "Rosyjski/Ukraiński", en: "Russian/Ukrainian" },
          flags: ["ru", "ua"],
          level: {
            pl: "znajomość cyrylicy, umożliwiająca zrozumienie słów brzmiących podobnie do polskich",
            en: "knowing of Cyrillic alphabet, which helps me to understand words which sounds familiar to Polish",
          },
        },
        {
          name: { pl: "Polski", en: "Polish" },
          flags: ["pl"],
          level: {
            pl: "ojczysty",
            en: "native",
          },
        },
      ],
      hobbies: [
        {
          pl: "Sport (raczej oglądanie niż uprawianie)",
          en: "Sport (rather watching than doing)",
          icon: "soccer",
        },
        {
          pl: "Transport publiczny (zwłaszcza tramwaje)",
          en: "Public transport (especially trams)",
          icon: "tram-side",
        },
      ],
      other: [
        { pl: "Prawo jazdy kat. B", en: "Driving license cat. B", icon: "car" },
      ],
    };
  },
  methods: {
    printMe() {
      window.print();
      console.log(this.$t("Print me"));
    },
  },
  computed: {
    currentLang() {
      return this.$i18n.locale;
    },
    getBio() {
      return this.personal.bio[this.currentLang];
    },
  },
};
</script>

<style scoped>
.jumbotron {
  padding: 2rem 1rem;
  margin: 1rem;
  background-color: #e9ecef !important;
  border-radius: 0.3rem;
  text-indent: 2rem;
}

@media screen {
  .jumbotron {
    box-shadow: 1px 1px 10px grey;
  }
}

@media print {
  hr {
    display: none;
  }

  h3 {
    margin-top: 1rem;
  }
}

.list {
  list-style-type: none;
}
</style>
