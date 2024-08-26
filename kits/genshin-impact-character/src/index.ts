import { getAssetsSrc, randoms } from "@randomkits/utils";

import en from "../assets/data/en.json";

type GenshinImpactCharacter = (typeof en)[number] & {
  avatar: string;
};

const GenshinImpactCharacter = {
  locale: {
    en,
  },

  random({
    num = 6,
    language = "en",
  }: {
    num?: number;
    language: "en";
  }): GenshinImpactCharacter[] {
    const data = this.locale[language];

    return randoms(data, num).map((item) => ({
      ...item,
      avatar: getAssetsSrc("genshin-impact-character", item.id),
    }));
  },
};

export default GenshinImpactCharacter;
