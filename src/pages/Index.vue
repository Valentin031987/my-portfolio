<template>
  <q-page class="row items-center justify-evenly">
    <Masthead />
    <MyWorks />
    <AboutMe />
    <Specialities />
  </q-page>
</template>

<script lang="ts">
import Masthead from "src/components/Sections/Masthead.vue";
import MyWorks from "components/Sections/MyWorks.vue";
import AboutMe from "components/Sections/AboutMe.vue";
import Specialities from "components/Sections/Specialities.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    Masthead,
    MyWorks,
    AboutMe,
    Specialities
  },
  setup() {
    return {
      //
    };
  },
});
</script>
