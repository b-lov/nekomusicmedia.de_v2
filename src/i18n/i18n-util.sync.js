// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
// @ts-check
/* eslint-disable */

/**
 * @typedef { import('./i18n-types').Locales } Locales
 * @typedef { import('./i18n-types').Translations } Translations
 */

import { initFormatters } from './formatters'

import { loadedFormatters, loadedLocales, locales } from './i18n-util'

import de from './de'

const localeTranslations = {
	de,
}

/**
 * @param { Locales } locale
 * @return { void }
 */
export const loadLocale = (locale) => {
	if (loadedLocales[locale]) return

	loadedLocales[locale] = /** @type { Translations } */ (/** @type { unknown } */ (localeTranslations[locale]))
	loadFormatters(locale)
}

export const loadAllLocales = () => locales.forEach(loadLocale)

/**
 * @param { Locales } locale
 * @return { void }
 */
export const loadFormatters = (locale) =>
	void (loadedFormatters[locale] = initFormatters(locale))
