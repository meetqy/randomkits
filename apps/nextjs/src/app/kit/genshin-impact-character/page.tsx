import { Metadata } from "next";
import { Image } from "@nextui-org/image";

import GenshinImpactCharacter from "@randomkits/genshin-impact-character";
import { getAssetsSrc, getChangelogSrc, getReadmeSrc } from "@randomkits/utils";

import KitLayout from "~/components/kit-layout";
import { NAME } from "./constant";
import { Generator } from "./generator";
import IntroduceMDX from "./introduce.mdx";

export const metadata: Metadata = {
  title: `Random ${NAME} Generator`,
  description: `Instantly generate a random ${NAME} with just one click!`,
};

export default async function GenshinImpactCharacterPage() {
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
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {GenshinImpactCharacter.locales["en"].map((item, i) => (
              <div key={i} className="relative rounded-md border">
                <Image
                  className="m-0"
                  src={getAssetsSrc(
                    NAME,
                    item.id.includes("traveler") ? "traveler" : item.id,
                  )}
                  alt={item.name + " avatar"}
                />
                {/* <Image
                  className="w-8 h-8 absolute left-0 top-0 z-10 m-0"
                  removeWrapper
                  src={getImage("random-genshin-impact-character-generator", item.type + ".png")}
                  alt={item.type + " type"}
                /> */}

                <div className="text-center text-sm">
                  <p className="my-2 px-0">{item.name}</p>
                </div>
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
