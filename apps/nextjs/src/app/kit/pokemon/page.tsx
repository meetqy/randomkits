import { Metadata } from "next";
import { Image } from "@nextui-org/image";

import Pokemon from "@randomkits/pokemon";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@randomkits/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@randomkits/ui/tabs";
import { getAssetsSrc, getChangelogSrc, getReadmeSrc } from "@randomkits/utils";

import "./styles.css";

import KitLayout from "~/components/kit-layout";
import { NAME } from "./constant";
import { Generator } from "./generator";
import IntroduceMDX from "./introduce.mdx";

export const metadata: Metadata = {
  title: `Random ${NAME} Generator`,
  description: `Instantly generate a random ${NAME} with just one click!`,
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

  const GenerationRender = ({ num }: { num: string }) => {
    const v = Pokemon.all("en").filter((item) => item.generation.includes(num));

    return (
      <TabsContent value={`generation ${num}`}>
        <Table className="mt-0">
          <TableCaption className="caption-top">
            <h3 className="mt-0 text-primary">Generation {num} Pokémon</h3>
          </TableCaption>

          <TableCaption>
            Generation {num} Pokémon, all count:{" "}
            <span className="font-mono font-medium text-primary">
              {v.length}
            </span>
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left">Pokemon</TableHead>
              <TableHead className="text-left">Name</TableHead>
              <TableHead className="text-center">Type</TableHead>
              <TableHead className="text-center">Number</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {v.map((item, i) => (
              <TableRow key={i}>
                <TableCell>
                  <Image
                    src={getAssetsSrc(NAME, item.img.normal)}
                    alt={item.name}
                  />
                </TableCell>
                <TableCell className="text-left">{item.name}</TableCell>
                <TableCell className="text-center">{item.type}</TableCell>
                <TableCell className="text-center">{item.num}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TabsContent>
    );
  };
  const generations = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <KitLayout
      title={NAME}
      remoteDocs={docs}
      introduce={
        <>
          <IntroduceMDX />
          <Tabs defaultValue="generation 1" className="w-full">
            <TabsList className="w-full justify-start overflow-x-auto">
              {generations.map((item) => (
                <TabsTrigger
                  key={item}
                  value={"generation " + item}
                  className="capitalize"
                >
                  Generation {item}
                </TabsTrigger>
              ))}
            </TabsList>

            {generations.map((item) => (
              <GenerationRender key={item} num={item.toString()} />
            ))}
          </Tabs>
        </>
      }
    >
      <Generator />
    </KitLayout>
  );
}
