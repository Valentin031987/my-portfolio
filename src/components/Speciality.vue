<template>
  <q-card class="my-card row justify-center align-top framework-item shadow-10">
    <q-icon v-if="icon" :name="icon" size="90px" color="primary" class="q-pa-xl" />
    
    <div v-if="!icon" class="self-center q-pa-xl">
      <q-img v-bind:src="image" width="90px"/>
    </div>

    <span class="caption text-center text-h6 text-white overflow-hidden full-width text-white bg-accent">
      {{ caption }}
    </span>
    
  </q-card>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  props: {
    icon: { type: String },
    image: { type: String },
    caption: { type: String },
  },
  setup() {
    return {
      //
    };
  },
});
</script>
<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 200px;
}
</style>
