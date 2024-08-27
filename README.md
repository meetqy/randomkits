# RandomKits

A random generator with preset scenarios to help you overcome choice anxiety.

> Online Example: [RandomKits](https://randomkits.com) - Can’t Decide? Try Random Kits!

## Developer

### How to publish to npm

```sh
pnpm changeset
pnpm changeset version
pnpm changeset publish
```

### How to add new package

```sh
pnpm pkg-add
```

In the turbo/generators/templates directory, you can modify the preset templates.

### How to add `shadcn/ui` components

```sh
pnpm ui-add {component}
```

## Date Rules

- image format => `256x256`/`.webp`, image src => `Utils.getAssetsSrc(id)`
