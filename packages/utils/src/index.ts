import { sampleSize } from "lodash-es";
import slugify from "slugify";

/**
 * Get the github raw url of the kit
 * @param kit kit name
 * @param name name or filename
 * @returns github raw url
 */
export const getAssetsSrc = (kit: string, name: string) => {
  kit = slugify(kit, { lower: true, remove: /[*+~.()'"!:@]/g });
  name = slugify(name, { lower: true, remove: /[*+~.()'"!:@]/g });

  return `https://raw.githubusercontent.com/meetqy/randomkits/main/kits/${kit}/assets/images/${name}.webp`;
};

export function randoms<T>(arr: T[], num: number) {
  return sampleSize(arr, num);
}
