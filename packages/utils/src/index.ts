import { sampleSize } from "lodash-es";
import slugify from "slugify";

const host = `https://raw.githubusercontent.com/meetqy/randomkits/main/kits`;

/**
 * Get the github raw url of the kit
 * @param kit kit name
 * @param name name or filename
 * @returns github raw url
 */
export const getAssetsSrc = (kit: string, name: string) => {
  kit = formatTextToSlugify(kit);
  name = formatTextToSlugify(name);

  return `${host}/${kit}/assets/images/${name}.webp`;
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
