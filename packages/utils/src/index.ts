import { sampleSize } from "lodash-es";
import slugify from "slugify";

const host = `https://raw.githubusercontent.com/meetqy/randomkits/main/kits`;

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

export function randoms<T>(arr: T[], num: number) {
  return sampleSize(arr, num);
}

export const formatTextToSlugify = (text: string) =>
  slugify(text, { lower: true, remove: /[*+~.()'"!:@]/g });
