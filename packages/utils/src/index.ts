import { sampleSize } from "lodash-es";
import slugify from "slugify";

export const getImageSrc = (name: string) => {
  return slugify(name, { lower: true, remove: /[*+~.()'"!:@]/g }) + ".webp";
};

export function randoms<T>(arr: T[], num: number) {
  return sampleSize(arr, num);
}
