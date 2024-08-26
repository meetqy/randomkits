import { randoms } from "@randomkits/utils";

import data from "../assets/data.json";

export const getRandom = ({ num }: { num: number; type?: string[] }) => {
  return randoms(data, num);
};
