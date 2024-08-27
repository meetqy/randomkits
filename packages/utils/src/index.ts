import { sampleSize } from "lodash-es";
import slugify from "slugify";

/**
 * Get the github raw url of the kit
 * @param kit kit name
 * @param name name or filename
 * @returns github raw url
 */
export const getAssetsSrc = (kit: string, name: string) => {
  kit = formatTextToSlugify(kit);
  name = formatTextToSlugify(name);

  return `https://raw.githubusercontent.com/meetqy/randomkits/main/kits/${kit}/assets/images/${name}.webp`;
};

export function randoms<T>(arr: T[], num: number) {
  return sampleSize(arr, num);
}

export const formatTextToSlugify = (text: string) =>
  slugify(text, { lower: true, remove: /[*+~.()'"!:@]/g });
