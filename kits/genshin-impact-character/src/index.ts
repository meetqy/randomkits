import { formatTextToSlugify, getAssetsSrc, randoms } from "@randomkits/utils";

import element from "../assets/data/element.json";
import en from "../assets/data/en.json";
import zh_hans from "../assets/data/zh-hans.json";
import zh_hant from "../assets/data/zh-hant.json";

type GenshinImpactCharacter = (typeof en)[number] & {
  avatar: string;
  elementText: string;
};

const locale = { en, "zh-hant": zh_hant, "zh-hans": zh_hans };
type Locale = keyof typeof locale;

const GenshinImpactCharacter = {
  name: "Genshin Impact Character",
  slug: () => formatTextToSlugify(GenshinImpactCharacter.name),

  locale,
  random({
    num = 6,
    language = "en",
  }: {
    num?: number;
    language: Locale;
  }): GenshinImpactCharacter[] {
    const data = this.locale[language];

    return randoms(data, num).map((item) => ({
      ...item,
      avatar: getAssetsSrc("genshin-impact-character", item.id),
      elementText: element[language][item.element as keyof typeof element.en],
    }));
  },
};

export default GenshinImpactCharacter;
