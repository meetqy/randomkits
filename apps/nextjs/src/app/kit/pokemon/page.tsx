import { Metadata } from "next";
import { Image } from "@nextui-org/image";

import Pokemon from "@randomkits/pokemon";
import { getAssetsSrc, getChangelogSrc, getReadmeSrc } from "@randomkits/utils";

import KitLayout from "~/components/kit-layout";
import { NAME } from "./constant";
import { Generator } from "./generator";
import IntroduceMDX from "./introduce.mdx";

export const metadata: Metadata = {
  title: `Random $ Generator`,
  description: `Instantly generate a random $ with just one click!`,
};

export default async function DogBreedPage() {
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
        </>
      }
    >
      <Generator />
    </KitLayout>
  );
}
