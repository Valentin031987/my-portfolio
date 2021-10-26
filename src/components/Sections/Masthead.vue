<template>
  <header
    class="masthead row full-width justify-center gradient-a text-white text-center"
    id="home"
  >
    <div class="self-center">

      <q-icon name="account_circle" size="120px" />

      <div
        :class="{
          'text-uppercase text-h2': $q.screen.gt.xs,
          'text-uppercase text-h4': $q.screen.lt.sm,
        }"
      >
        Valentino García
      </div>


      <p class="text-h5">Full Stack Developer</p>
      <div class="q-gutter-sm q-mt-xl">
        
        <a v-bind:href="$GLOBALS.INFO.mailto" target="_blank">
          <q-btn color="primary" icon="mdi-mail" label="Email" />
        </a>
        <a
          v-bind:href="$GLOBALS.INFO.linkedin"
          target="_blank"
        >
          <q-btn color="primary" icon="mdi-linkedin" label="LinkedIn" />
        </a>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
.masthead {
  height: 80vh;
}
</style>
