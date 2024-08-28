import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";

import { getReadmeSrc } from "@randomkits/utils";

import KitLayout from "~/components/kit-layout";
import ReadmeMDX from "./readme.mdx";

const name = "Genshin Impact Character";

export const metadata: Metadata = {
  title: `Random ${name} Generator`,
  description: `Instantly generate a random ${name} with just one click!`,
};

export default async function GenshinImpactCharacterPage() {
  const res = await fetch(getReadmeSrc(name));
  const readme = await res.text();
  console.log(readme);

  return (
    <KitLayout
      title={name}
      readme={
        <>
          <ReadmeMDX />
          {/* <MDXRemote source={readme} /> */}
        </>
      }
    >
      test
    </KitLayout>
  );
}
