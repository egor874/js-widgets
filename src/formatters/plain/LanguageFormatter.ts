import Language from '../../models/workshop/Language';
import Localisation from '../../utils/Localisation';

/**
 * Formats the language
 */
export default class LanguageFormatter {

  static format(loc: Localisation, language: Language | string | string[], part: string | null = null): string | string[]{
    if (language instanceof Language) {
      return LanguageFormatter.formatObject(loc, language, part);
    }
    if (typeof language === 'string') {
      return loc.translate('language.' + language);
    }
    if (Array.isArray(language)) {
      return language.map(t => loc.translate('language.' + t));
    }
    return '';
  }

  protected static formatObject(loc: Localisation, language: Language, part: string | null = null): string {
    switch(part) {
      case 'short':
        return language.spoken.length > 1 ?
          loc.translate('event.info.shortTwoLangs', {first: language.spoken[0], second: language.spoken[1]}) :
          loc.translate('language.' + language.spoken[0]);

      default:
        const
          prefix = language.spoken.length > 1 ?
            loc.translate('event.info.twoLangs', {first: language.spoken[0], second: language.spoken[1]}) :
            loc.translate('event.info.oneLang', {lang: language.spoken[0]});
        const suffix = language.materials ?
          loc.translate('event.info.materials', {lang: language.materials}) : '.';
        return prefix + suffix;
    }
  }
}
