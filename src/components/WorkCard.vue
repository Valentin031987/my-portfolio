<template>
  <q-card class="my-card shadow-10">
    <q-img v-bind:src="image" class="cursor-pointer" @click="goToReview" />

    <q-card-section>
      <div class="text-h6 q-mt-sm q-mb-xs cursor-pointer" @click="goToReview">
        {{ title }}
      </div>
      <div class="text-caption text-grey">
        <div v-if="review">
          {{ review }}
        </div>
        <div v-else>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </q-card-section>

    <q-card-section v-if="stack">
      <q-chip v-for="item in stack" :label="item" :key="item" />
    </q-card-section>

    <q-card-actions class="row full-width justify-center q-mb-sm q-gutter-sm">
      <a v-if="gitBtn">
        <q-btn size="sm" color="dark" :label="$t('git')" />
      </a>

      <a v-if="viewBtn" v-bind:href="viewBtn" target="_blank">
        <q-btn size="sm" color="primary" :label="$t('viewSite')" />
      </a>
    </q-card-actions>
  </q-card>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  props: {
    image: { type: String, required: true },
    title: { type: String, required: true },
    stack: { type: Array, required: true },
    viewBtn: { type: String },
    gitBtn: { type: String },
    review: { type: String },
    to: { type: String },
  },
  setup(props) {
    const router = useRouter();
    const show = ref(false);
    function goToReview() {
      if(!props.to){
        return
      }
      router.push(props.to);
    }
    return {
      //
      goToReview,
    };
  },
});
</script>
<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 350px;
  transition: box-shadow .3s;
}
.my-card:hover{
  box-shadow: 0 0 25px rgb(55, 84, 218); 
  transition: .5s all ease;
}

</style>
