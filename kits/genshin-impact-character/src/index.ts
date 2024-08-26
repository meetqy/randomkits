import { randoms } from "@randomkits/utils";

import en from "../assets/data/en.json";

const GenshinImpactCharacter = {
  locale: {
    en,
  },

  random({ num = 6, language = "en" }: { num?: number; language: "en" }) {
    const data = this.locale[language];

    return randoms(data, num);
  },
};

export default GenshinImpactCharacter;
