<template>
  <q-footer class="bg-footer" id="contact">
    <div class="q-pa-xl row justify-center">
      <div class="text-h4 text-center">{{ $t("wContactMe") }}</div>

      <div class="row full-width q-my-md q-gutter-sm justify-center">
        <a v-bind:href="$GLOBALS.INFO.mailto" target="_blank">
          <q-btn color="primary" icon="mdi-mail" label="Email" />
        </a>
        <a v-bind:href="$GLOBALS.INFO.linkedin" target="_blank">
        <q-btn color="primary" icon="mdi-linkedin" label="LinkedIn" />
        </a>
      </div>
    </div>
    
    <div class="q-pa-lg bg-footer-2 text-center text-caption">
      {{ $GLOBALS.INFO.email }} | {{ year }} - {{ $t("copyright") }}
    </div>
  </q-footer>
</template>

<script>
export default {
  name: "Footer",
  setup() {
    const year = new Date();
    return {
      year: year.getFullYear(),
    };
  },
};
</script>
<style lang="scss" scoped>
.col-footer {
  width: 350px;
}
.enlaces {
  padding: 0;
  margin: 0;
}

.bg-footer {
  background-color: #2c3e50;
}
.bg-footer-2 {
  background-color: #1a252f;
}
</style>
