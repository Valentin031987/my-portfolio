<template>
  <q-page class="q-px-md q-py-xl">
    <div class="row justify-center">
      <div class="col-12 col-md-8 q-gutter-y-lg">
        <div class="text-h4">GALLOBET.NET</div>

        <p class="text-body1">
          {{ $t("pages.gbet.line1") }}
        </p>

        <p class="text-body1">
          {{ $t("pages.gbet.line2") }}
        </p>
        <p class="text-body1">
          {{ $t("pages.gbet.line3") }}
        </p>

        <p class="text-body1">
          {{ $t("pages.gbet.line4") }}
        </p>

        <Carousel
          :images="[
            'images/gbet.webp',
            'images/gbet/gbet2.webp',
            'images/gbet/gbet3.webp',
            'images/gbet/gbet4.webp',
            'images/gbet/gbet5.webp',
            'images/gbet/gbet6.webp',
            'images/gbet/gbet7.webp',
            'images/gbet/gbet8.webp',
          ]"
        />
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
