<template>
  <q-page class="q-px-md q-py-xl">
    <div class="row justify-center">
      <div class="col-12 col-md-8 q-gutter-y-lg">
        <div class="text-h4">ECOMMERCE</div>

        <p class="text-body1">
          {{$t('pages.cake.line1')}}
        </p>

        <p class="text-body1">
          {{$t('pages.cake.line2')}}
        </p>
        <p class="text-body1">
          {{$t('pages.cake.line3')}}
        </p>

        <p class="text-body1">
          {{$t('pages.cake.line4')}}
        </p>

        <p class="text-body1">
          {{$t('pages.cake.line5')}}
        </p>

        <Carousel
          :images="[
            'images/cake.webp',
            'images/cake/cake2.webp',
            'images/cake/cake3.webp',
            'images/cake/cake4.webp',
            'images/cake/cake5.webp',
            'images/cake/cake6.webp',
            'images/cake/cake7.webp',
            'images/cake/cake8.webp',
            'images/cake/cake9.webp',
            'images/cake/cake10.webp',
            'images/cake/cake11.webp',
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
