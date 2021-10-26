import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';
import { LANG } from 'src/constants';

import messages from 'src/i18n';

const lang = localStorage.getItem(LANG.localStorageKey)

const i18n = createI18n({
  locale: lang || 'en',
  messages,
});

export default boot(({ app }) => {
  app.use(i18n);
});
