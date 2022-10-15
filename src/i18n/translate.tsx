import {I18n} from 'i18n-js';
import en from './en.json';
import vi from './vi.json';

const i18n = new I18n(en);

i18n.enableFallback = true;
i18n.translations = {en, vi};

i18n.locale = 'en';

/**
 * Translates text.
 *
 * @param key The i18n key.
 * @param options
 */
export function translate(key: string, options?: Record<string, unknown>) {
  return key ? i18n.t(key, options) : null;
}
