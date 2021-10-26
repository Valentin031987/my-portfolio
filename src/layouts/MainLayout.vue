<template>
  <q-layout view="hHh lpR fff">
    <Header
      @scrollTo="scrollToElement"
      :reduceHeader="reduceHeader"
      :scrollInfo="scrollInfo"
    />

    <q-page-container>
      <router-view />
    </q-page-container>

    <Footer />
    <StickButtonGoUp />

    <q-scroll-observer vertical @scroll="onScroll"></q-scroll-observer>
  </q-layout>
</template>

<script>
import Footer from "../components/Main/Footer.vue";
import Header from "../components/Main/Header.vue";
import StickButtonGoUp from "../components/StickButtonGoUp.vue";

import { defineComponent, ref, computed } from "vue";
import { scroll } from "quasar";


export default defineComponent({
  name: "MainLayout",

  components: {
    Footer,
    Header,
    StickButtonGoUp
  },

  setup() {
    const scrollInfo = ref(null);
    const { getScrollTarget, setVerticalScrollPosition } = scroll;
    const reduceHeader = computed(() => scrollInfo.value?.position.top > 100);

    function scrollToElement(el) {
      el = document.getElementById(el);
      const target = getScrollTarget(el);
      const offset = el.offsetTop;
      const duration = 500;
      setVerticalScrollPosition(target, offset, duration);
    }

    function isScrollOnElement(el) {
      el = document.getElementById(el);
      const target = getScrollTarget(el);
      const offset = el.offsetTop;
    }

    return {
      //
      scrollInfo,
      scrollToElement,
      reduceHeader,
      onScroll(info) {
        scrollInfo.value = info;
      },
    };
  },
});
</script>
