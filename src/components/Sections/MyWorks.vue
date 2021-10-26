<template>
  <section class="page-section row full-width justify-center gradient-b" id="myworks">
    <div class="container">

      <div class="text-h2 page-section-heading text-center text-uppercase">
        {{ $t("portfolio") }}
      </div>

      <div class="row justify-center q-gutter-xl q-my-xl">
        <WorkCard
          title="Bet Site"
          :image="'images/gbet.webp'"
          :stack="['Laravel', 'Blade', 'VueJs', 'MySQL', 'Pusher', 'PayPal', 'iziPay']"
          :viewBtn="$GLOBALS.SITES.gbet"
          :review="$t('gbetReview')"
          to="/reviews/gbet-review"
        />
        <WorkCard
          title="Invoicer"
          :image="'images/invoicer.webp'"
          :stack="['VueJs', 'NestJs', 'Quasar', 'PostgreSQL', 'TypeORM']"
          :viewBtn="$GLOBALS.SITES.invoicer"
          :review="$t('invoicerReview')"
          to="/reviews/invoicer-review"
        />
        <WorkCard
          title="E-commerce"
          :image="'images/cake.webp'"
          :stack="['CakePHP', 'MySQL', 'Html5', 'Boostrap', 'JQuery']"
          :viewBtn="$GLOBALS.SITES.cake"
          :review="$t('cakeReview')"
          to="/reviews/ecommerce-review"
        />
        <WorkCard
          :image="'images/portfolio.png'"
          :title="$t('myPortfolio')"
          :stack="['VueJs', 'Quasar']"
          gitBtn="link"
          :review="$t('portfolioReview')"
          to="/reviews/portfolio-review"
        />
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import WorkCard from "src/components/WorkCard.vue";
import Carousel from "src/components/Carousel.vue";

export default defineComponent({
  components: {
    WorkCard,
    Carousel,
  },
  setup() {
    const slide = ref("style");
    return {
      //
      slide,
    };
  },
});
</script>
