# Random Black Myth Wukong Boss Generator

> Online Example: [RandomKits](https://randomkits.com) - Can’t Decide? Try Random Kits!

Random get **Black Myth Wukong Boss** data, The data is a JSON file and can be used wherever.

## Install

```shell
npm install @randomkits/black-myth-wukong-boss

yarn add @randomkits/black-myth-wukong-boss

pnpm add @randomkits/black-myth-wukong-boss
```

## Interface

```ts
interface BlackMythWukongBoss {
  name: string;
  element: string;
  // element language text
  elementText: string;
  // github assets url
  avatar: string;
  id: stirng;
}
```

## Usage

```js
import BlackMythWukongBoss from "@randomkits/black-myth-wukong-boss";

// simple
BlackMythWukongBoss.random();
// => BlackMythWukongBoss[]

// random number default => {num: 6, language: "en"}
BlackMythWukongBoss.random({ num: 6, language: "en" });
```

## Api

### BlackMythWukongBoss.random(\{num?, language?\})

Get Random black-myth-wukong-boss.

#### num

- Type: `number`
- Default: `6`

#### language

- Type: `string`
- Default: `en`

## Supported languages

`@randomkits/black-myth-wukong-boss` are available for the following languages:

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

## Thanks

Data Source: https://wiki.biligame.com/wukong/%E6%95%8C%E4%BA%BA

---

## Issues

[Github Issues](https://github.com/meetqy/randomkits/issues)

## Examples

- [random genshin impact character generator](https://randomkits.com/kit/random-black-myth-wukong-boss-generator/)
- [random pokemon generator](https://randomkits.com/kit/random-pokemon-generator/)

## Packages

- [@randomkits/black-myth-wukong-boss](https://www.npmjs.com/package/@randomkits/black-myth-wukong-boss)
- [@randomkits/pokemon](https://www.npmjs.com/package/@randomkits/pokemon)
