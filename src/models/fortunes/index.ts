import {list as english} from "./EN-US";

/**
 *
 * @param {String} lang - ISO 639-1 Code
 * @returns {Array[String]} fortune list localized to the language
 */
 function getSourceByLanguage(lang: string): Array {
  switch (lang.toLowercase()) {
    case "eng": // english ... default us
      return english;
    case undefined: // no language specified
    default:
      return english;
  }
}

/**
 *
 * @param {String} lang - ISO 639-1 Code
 * @returns {String} fortune list localized to the language
 */
export function getFortune(lang:string = "eng"): string {
  const fortuneList = getSourceByLanguage(lang);
  return fortuneList[Math.floor(Math.random() * fortuneList.length)];
}
