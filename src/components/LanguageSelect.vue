<template>
  <q-select
    v-model="lang"
    :options="langOptions"
    dense
    borderless
    emit-value
    map-options
    options-dense
    class="q-mr-sm"
    style="min-width: 150px; font-size:12px"
  >
    <template v-slot:prepend>
      <q-icon name="language" size="xs" />
    </template>
  </q-select>
</template>
<script lang="ts">
import { ref, watch, defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import { LANG } from "src/constants";

export default defineComponent({
  name: "LanguageSelect",
  setup() {

    const { locale } = useI18n({ useScope: "global" });
    const lang = ref(locale);

    watch(lang, (val) => {
      locale.value = val;
      localStorage.setItem(LANG.localStorageKey, val);
    });

    return {
      lang,
      langOptions: [
        { value: "en", label: LANG.en },
        { value: "es", label: LANG.es },
      ],
    };
  },
});
</script>
