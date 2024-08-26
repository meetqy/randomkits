import GenshinImpactCharacter from "@randomkits/genshin-impact-character";
import { getAssetsSrc } from "@randomkits/utils";

export default function HomePage() {
  const data = GenshinImpactCharacter.random({ num: 6, language: "en" });

  return (
    <div>
      {data.map((item) => (
        <div key={item.name}>
          <h1>{item.name}</h1>
          <p>{item.element}</p>
          <img src={getAssetsSrc("genshin-impact-character", item.name)} />
        </div>
      ))}
    </div>
  );
}
