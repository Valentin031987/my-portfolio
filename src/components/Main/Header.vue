<template>
  <div>
    <q-header>
      <div
        class="q-pa-none bg-light-blue-12 row justify-between text-white"
      >
        <a v-bind:href="$GLOBALS.INFO.mailto" target="_blank" class="self-center">
          <q-btn
            color="secondary"
            flat
            :label="$t('contactMe')"
            text-color="grey-10"
            icon="email"
            size="10px"
          />
        </a>

        <div>
          <LanguageSelect />
        </div>
      </div>

      <q-toolbar class="bg-nav">
        <q-toolbar-title :class="{'gt-sm': !onlyReturn}">
          <router-link to="/" class="text-white" style="text-decoration: none">
            {{ $t("myPortfolio") }}
          </router-link>
        </q-toolbar-title>

        <div
          :class="
            reduceHeader
              ? 'q-ma-sm row delay'
              : 'q-ma-lg row delay'
          "
        >
          <div v-if="onlyReturn">
            <q-btn
              stretch
              flat
              :label="$t('goBack')"
              :size="$q.screen.lt.sm ? 'sm' : 'md'"
              @click="$router.back()"              
            />
          </div>

          <div v-if="!onlyReturn" class="row justify-center">
            <q-btn
              :class="{ 'bg-blue-grey-5': onHome }"
              stretch
              flat
              :label="$t('home')"
              :size="$q.screen.lt.sm ? 'sm' : 'md'"
              @click="scrollToElement('home')"
            />
            <q-btn
              :class="{ 'bg-blue-grey-5': onMyworks }"
              stretch
              flat
              :label="$t('myWorks')"
              :size="$q.screen.lt.sm ? 'sm' : 'md'"
              @click="scrollToElement('myworks')"
            />
            <q-btn
              :class="{ 'bg-blue-grey-5': onAbout }"
              stretch
              flat
              :label="$t('aboutMe')"
              :size="$q.screen.lt.sm ? 'sm' : 'md'"
              @click="scrollToElement('about')"
            />
            <q-btn
              stretch
              :class="{ 'bg-blue-grey-5': onSpecialities }"
              flat
              :label="$t('mySpecialities')"
              :size="$q.screen.lt.sm ? 'sm' : 'md'"
              @click="scrollToElement('specialities')"
            />
            <q-btn
              stretch
              :class="{ 'bg-blue-grey-5': onContact }"
              flat
              :label="$t('contactMe')"
              :size="$q.screen.lt.sm ? 'sm' : 'md'"
              @click="scrollToElement('contact')"
            />
          </div>
        </div>
      </q-toolbar>
    </q-header>
  </div>
</template>
<script>
import { defineComponent, computed } from "vue";
import LanguageSelect from "src/components/LanguageSelect.vue";
import { dom, scroll } from "quasar";

export default defineComponent({
  components: {
    LanguageSelect,
  },
  props: {
    reduceHeader: { type: Boolean, default: false },
    onlyReturn: { type: Boolean, default: false },
    scrollInfo: { type: Object },
  },
  name: "Header",
  emits: ["scrollTo"],
  setup(props, { emit }) {
    const { height } = dom;

    const onSpecialities = computed(() => isScrollOnTarget("specialities"));
    const onHome = computed(() => isScrollOnTarget("home"));
    const onMyworks = computed(() => isScrollOnTarget("myworks"));
    const onAbout = computed(() => isScrollOnTarget("about"));
    const onContact = computed(() => isScrollOnTarget("contact"));

    function isScrollOnTarget(el) {
      el = document.getElementById(el);
      if (!el && !props.scrollInfo) {
        return false;
      }
      const offset = el.offsetTop;

      return (
        offset <= props.scrollInfo?.position?.top + 50 &&
        props.scrollInfo?.position?.top <= offset + height(el) - 50
      );
    }

    return {
      scrollToElement(el) {
        emit("scrollTo", el);
      },
      onSpecialities,
      onHome,
      onMyworks,
      onAbout,
      onContact,
    };
  },
});
</script>
<style lang="scss" scoped>
.bg-nav {
  background-color: #2c3e50;
}
.delay {
  transition: 0.3s all ease;
}
</style>
