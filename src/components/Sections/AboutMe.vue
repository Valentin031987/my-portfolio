<template>
  <section class="page-section text-white gradient-a" id="about">
    <div class="container">

      <div class="text-h2 page-section-heading">
        {{ $t("aboutMe") }}
      </div>

      <div class="row justify-center q-col-gutter-xl">
        <div class="col-sm-5 ms-auto">
          <p class="text-body1 text-justify">
            {{$t('aboutMeLine1')}}
          </p>
        </div>
        <div class="col-sm-5 me-auto">
          <p class="text-body1 text-justify">
            {{$t('aboutMeLine2')}}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    //,
  },
  setup() {
    return {
      //
    };
  },
});
</script>
