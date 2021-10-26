<template>
  <section
    class="page-section row full-width justify-center text-black gradient-b"
    id="specialities"
  >
    <div class="container">
      <div class="text-h2 page-section-heading">
        {{ $t("mySpecialities") }}
      </div>

      <div class="text-center">
        <div class="lead condensed">
          <div>
            <div class="q-pb-none">
              {{ $t("mySpecialitiesReview") }}
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center q-pt-lg q-gutter-xl">
        <Speciality icon="mdi-language-php" caption="PHP" />
        <Speciality icon="mdi-laravel" caption="Laravel" />
        <Speciality icon="mdi-vuejs" caption="VueJs" />
        <Speciality :image="require('src/assets/images/quasar.png')" caption="Quasar" />
      </div>

      <div class="flex justify-center q-pt-lg q-gutter-xl">
        <Speciality icon="mdi-database" caption="SQL" />
        <Speciality icon="mdi-nodejs" caption="Express/NestJs" />
        <Speciality icon="mdi-code-json" caption="REST API" />
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Speciality from "src/components/Speciality.vue";

export default defineComponent({
  components: {
    Speciality,
  },
  setup() {
    return {
      //
    };
  },
});
</script>
