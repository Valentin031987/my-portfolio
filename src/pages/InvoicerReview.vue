<template>
  <q-page class="q-px-md q-py-xl">
    <div class="row justify-center">
      <div class="col-12 col-md-8 q-gutter-y-lg">
        <div class="text-h4">INVOICER</div>

        <p class="text-body1">
          {{ $t("pages.invoicer.line1") }}
        </p>

        <p class="text-body1">
          {{ $t("pages.invoicer.line2") }}
        </p>
        <p class="text-body1">
          {{ $t("pages.invoicer.line3") }}
        </p>

        <p class="text-body1">
          {{ $t("pages.invoicer.line4") }}
        </p>

        <p class="text-body1">
          {{ $t("pages.invoicer.line5") }}
        </p>

        <p class="text-body1">
          {{ $t("pages.invoicer.line6") }}
        </p>

        <p class="text-body1">
          {{ $t("pages.invoicer.line7") }}
        </p>

        <Carousel
          :images="[
            'images/invoicer.webp',
            'images/inv/inv2.webp',
            'images/inv/inv3.webp',
            'images/inv/inv4.webp',
            'images/inv/inv5.webp',
            'images/inv/inv6.webp',
            'images/inv/inv7.webp',
            'images/inv/inv8.webp',
            'images/inv/inv9.webp',
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
