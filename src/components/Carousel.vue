<template>
  <q-carousel
    swipeable
    animated
    v-model="slide"
    thumbnails
    infinite
    class="bg-black"
    v-model:fullscreen="fullscreen"
  >
    <q-carousel-slide
      v-for="(image, index) in images"
      v-bind:key="index"
      :name="index"
      :img-src="image"
    />

      <template v-slot:control>
        <q-carousel-control
          position="bottom-right"
          :offset="[18, 18]"
        >
          <q-btn
            push round dense color="white" text-color="primary"
            :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
            @click="fullscreen = !fullscreen"
          />
        </q-carousel-control>
      </template>    
  </q-carousel>
</template>
<script>
import { ref } from "vue";

export default {
  props: {
    images: { type: Array },
  },
  setup() {
    return {
      fullscreen: ref(false),
      slide: ref(0),
    };
  },
};
</script>
<style lang="scss" scoped>
.q-carousel__slide {
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
