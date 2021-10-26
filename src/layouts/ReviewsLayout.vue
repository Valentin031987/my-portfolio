<template>
  <q-layout view="hHh lpR fff">
    <Header :reduceHeader="true" :onlyReturn="true" />

    <q-page-container>
        <router-view />
        <MyWorks />
    </q-page-container>

    <Footer />
    <StickButtonGoUp />
  </q-layout>
</template>

<script>
import Footer from "../components/Main/Footer.vue";
import Header from "../components/Main/Header.vue";
import MyWorks from "../components/Sections/MyWorks.vue";

import StickButtonGoUp from "../components/StickButtonGoUp.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    Footer,
    Header,
    StickButtonGoUp,
    MyWorks
  },

  setup() {
    return {
      //
    };
  },
});
</script>
