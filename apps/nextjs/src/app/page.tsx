import GenshinImpactCharacter from "@randomkits/genshin-impact-character";

export default function HomePage() {
  const data = GenshinImpactCharacter.random({ num: 6, language: "en" });

  return (
    <div>
      {data.map((item) => (
        <div key={item.name}>
          <h1>{item.name}</h1>
          <p>{item.element}</p>
          <img src={item.avatar} />
        </div>
      ))}
    </div>
  );
}
