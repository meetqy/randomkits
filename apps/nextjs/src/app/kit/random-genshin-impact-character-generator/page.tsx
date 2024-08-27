import { Metadata } from "next";

import KitLayout from "~/components/kit-layout";

const name = "Genshin Impact Character";

export const metadata: Metadata = {
  title: `Random ${name} Generator`,
  description: `Instantly generate a random ${name} with just one click!`,
};

export default function GenshinImpactCharacterPage() {
  return (
    <KitLayout
      title={name}
      readme={
        <>
          <h1>这是一段 README</h1>
        </>
      }
    >
      test
    </KitLayout>
  );
}
