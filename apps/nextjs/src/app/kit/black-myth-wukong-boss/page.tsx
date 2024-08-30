import { Metadata } from "next";
import { Image } from "@nextui-org/image";

import BlackMythWukongBoss from "@randomkits/black-myth-wukong-boss";
import { getAssetsSrc, getChangelogSrc, getReadmeSrc } from "@randomkits/utils";

import KitLayout from "~/components/kit-layout";
import { NAME } from "./constant";
import { Generator } from "./generator";
import IntroduceMDX from "./introduce.mdx";

export const metadata: Metadata = {
  title: `Random ${NAME} Generator`,
  description: `Instantly generate a random ${NAME} with just one click!`,
};

export default async function BlackMythWukongBossPage() {
  const [readme, changelog] = await Promise.all([
    fetch(getReadmeSrc(NAME)),
    fetch(getChangelogSrc(NAME)),
  ]);
  const docs = {
    readme: await readme.text(),
    changelog: await changelog.text(),
  };

  return (
    <KitLayout
      title={NAME}
      remoteDocs={docs}
      introduce={
        <>
          <IntroduceMDX />
          <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8">
            {BlackMythWukongBoss.locales["zh-hans"].map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center gap-2 bg-muted"
              >
                <Image
                  removeWrapper
                  src={getAssetsSrc(NAME, item.src)}
                  className="m-0 w-full"
                  alt={item.name}
                />
                {/* <p className="m-0">{item.name}</p> */}
              </div>
            ))}
          </div>
        </>
      }
    >
      <Generator />
    </KitLayout>
  );
}
