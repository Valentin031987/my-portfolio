import { boot } from 'quasar/wrappers';
import { INFO, LANG, SITES } from 'src/constants';

export default boot(({ app }) => {
    app.config.globalProperties.$GLOBALS = { INFO, LANG, SITES };
});