# Random Genshin Impact Character Generator

> Online Example: [RandomKits](https://randomkits.com) - Can’t Decide? Try Random Kits!

Random get genshin impact character data, The data is a JSON file and can be used wherever.

## Install

```sh
npm install @randomkits/genshin-impact-character

yarn add @randomkits/genshin-impact-character

pnpm add @randomkits/genshin-impact-character
```

## Interface

```ts
type GenshinImpactCharacter {
  name: string;
  element: string;
  avatar: string; // github assets url
  id: stirng;
}
```

## Usage

```js
import GenshinImpactCharacter from "@randomkits/genshin-impact-character";

// simple
GenshinImpactCharacter.random();
// => GenshinImpactCharacter[]

// random number default => {num: 6, language: "en"}
GenshinImpactCharacter.random({ num: 6, language: "en" });
```

## Api

**GenshinImpactCharacter.random({num?, language?})**

Get Random Genshin Impact Character.

### num

- Type: `number`
- Default: `6`

### language

- Type: `string`
- Default: `en`

## Supported languages

`@randomkits/genshin-impact-character` are available for the following languages:

- de (German)
- en (English)
- fr (French)
- es (Spanish)
- ja (Japanese)
- ko (Korean)
- ru (Russian)
- th (Thai)
- zh-Hans (Simplified Chinese)
- zh-Hant (Traditional Chinese)

## Issues

Github issues: https://github.com/meetqy/randomkits/issues

---

## Examples

- [random genshin impact character generator](https://randomkits.com/kit/random-genshin-impact-character-generator/)
- [random pokemon generator](https://randomkits.com/kit/random-pokemon-generator/)

## Packages

- [@randomkits/genshin-impact-character](https://www.npmjs.com/package/@randomkits/genshin-impact-character)
- [@randomkits/pokemon](https://www.npmjs.com/package/@randomkits/pokemon)
