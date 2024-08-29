import { formatTextToSlugify, randoms } from "@randomkits/utils";

import en from "../assets/data/en.json";

export type Pokemon = (typeof en)[number];

const locale = { en };
type Locale = keyof typeof locale;

const Pokemon = {
  name: "Pokemon",
  locales: locale,
  count: en.length,
  all: (language: Locale) => Pokemon.locales[language],
  slug: () => formatTextToSlugify(Pokemon.name),

  random({
    num = 6,
    language = "en",
  }: {
    num?: number;
    language: Locale;
  }): Pokemon[] {
    const data = this.locales[language];

    return randoms(data, num);
  },
};

export default Pokemon;
