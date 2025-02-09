import { createI18nMiddleware } from 'next-international/middleware';
import localesConfig from '@/locales/config';

export default createI18nMiddleware(localesConfig);
