import { sampleSize } from "lodash-es";
import slugify from "slugify";

const host = `https://raw.githubusercontent.com/meetqy/randomkits/main/kits`;

export { random, sampleSize } from "lodash-es";

/**
 * Get the github raw url of the kit
 * @param kit kit name
 * @param id name or filename or id
 * @returns github raw url
 */
export const getAssetsSrc = (kit: string, id: string) => {
  kit = formatTextToSlugify(kit);
  id = formatTextToSlugify(id);

  return `${host}/${kit}/assets/images/${id}.webp`;
};

export const getReadmeSrc = (kit: string) => {
  kit = formatTextToSlugify(kit);

  return `${host}/${kit}/README.md`;
};

export const getChangelogSrc = (kit: string) => {
  kit = formatTextToSlugify(kit);

  return `${host}/${kit}/CHANGELOG.md`;
};

/**
 * @deprecated use sampleSize same as loadash.sampleSize
 * @param arr
 * @param num
 * @returns
 */
export function randoms<T>(arr: T[], num: number) {
  return sampleSize(arr, num);
}

export const formatTextToSlugify = (text: string) => {
  const index = text.indexOf("元");
  let result = slugify(text, { lower: true, remove: /[*+~.()'"!:@]/g });
  if (index > -1) {
    result = result.replace("yuan", "元");
  }

  return result;
};
