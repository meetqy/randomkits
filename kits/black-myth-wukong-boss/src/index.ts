import { formatTextToSlugify, sampleSize } from "@randomkits/utils";

import zh_hans from "../assets/data/zh-hans.json";

export type BlackMythWukongBoss = (typeof zh_hans)[number];

const locale = { "zh-hans": zh_hans };
type Locale = keyof typeof locale;

const BlackMythWukongBoss = {
  name: "BlackMythWukongBoss",
  locales: locale,
  count: zh_hans.length,
  all: (language: Locale) => BlackMythWukongBoss.locales[language],
  slug: () => formatTextToSlugify(BlackMythWukongBoss.name),

  random({
    num = 6,
    language = "zh_hans",
  }: {
    num?: number;
    language: Locale;
  }): BlackMythWukongBoss[] {
    const data = this.locales[language];

    return sampleSize(data, num);
  },
};

export default BlackMythWukongBoss;
