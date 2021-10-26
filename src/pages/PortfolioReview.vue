<template>
  <q-page class="q-px-md q-py-xl">
    <div class="row justify-center">
      <div class="col-12 col-md-8 q-gutter-y-lg">
        <div class="text-h4">MY PORTFOLIO !</div>

        <p class="text-body1">
          {{ $t("pages.portfolio.line1") }}
        </p>

        <p class="text-body1">
          {{ $t("pages.portfolio.line2") }}
        </p>
        <p class="text-body1">
          {{ $t("pages.portfolio.line3") }}
        </p>

        <p class="text-body1">
          {{ $t("pages.portfolio.line4") }}
        </p>

        <q-img src="images/portfolio.png" />

      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import Carousel from "src/components/Carousel.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    Carousel,
  },
  setup() {
    return {
      //
    };
  },
});
</script>
