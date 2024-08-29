# Random Pokemon Generator

> Online Example: [RandomKits](https://randomkits.com) - Can’t Decide? Try Random Kits!

Random get pokemon data, The data is a JSON file and can be used wherever.

## Install

```shell
npm install @randomkits/pokemon

yarn add @randomkits/pokemon

pnpm add @randomkits/pokemon
```

## Interface

```ts
interface Pokemon {
  generation: string;
  img: {
    normal: string;
    shiny: string;
  };
  num: string;
  name: string;
  type: string;
}
```

## Usage

```js
import Pokemon from "@randomkits/pokemon";

// simple
Pokemon.random();
// => Pokemon[]

// random number default => {num: 6, language: "en"}
Pokemon.random({ num: 6, language: "en" });
```

## Api

### Pokemon.random(\{num?, language?\})

Get Random Genshin Impact Character.

#### num

- Type: `number`
- Default: `6`

#### language

- Type: `string`
- Default: `en`

## Supported languages

`@randomkits/pokemon` are available for the following languages:

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

---

## Issues

[Github Issues](https://github.com/meetqy/randomkits/issues)

## Examples

- [random genshin impact character generator](https://randomkits.com/kit/random-pokemon-generator/)
- [random pokemon generator](https://randomkits.com/kit/random-pokemon-generator/)

## Packages

- [@randomkits/pokemon](https://www.npmjs.com/package/@randomkits/pokemon)
- [@randomkits/pokemon](https://www.npmjs.com/package/@randomkits/pokemon)
