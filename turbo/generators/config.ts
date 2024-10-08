import { execSync } from "node:child_process";
import type { PlopTypes } from "@turbo/gen";

interface PackageJson {
  name: string;
  scripts: Record<string, string>;
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
}

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("init", {
    description: "Generate a new package for the RandomKits Monorepo",
    prompts: [
      {
        type: "list",
        name: "dir",
        message: "Choose directory?",
        choices: ["kits", "packages"],
        default: "kits",
      },
      {
        type: "input",
        name: "name",
        message:
          "What is the name of the package? (You can skip the `@randomkits/` prefix)",
      },
      {
        type: "input",
        name: "deps",
        message:
          "Enter a space separated list of dependencies you would like to install",
      },
    ],
    actions: [
      (answers) => {
        if ("name" in answers && typeof answers.name === "string") {
          if (answers.name.startsWith("@randomkits/")) {
            answers.name = answers.name.replace("@randomkits/", "");
          }
        }
        return "Config sanitized";
      },
      {
        type: "add",
        path: "{{dir}}/{{ name }}/eslint.config.js",
        templateFile: "templates/eslint.config.js.hbs",
      },
      {
        type: "add",
        path: "{{dir}}/{{ name }}/package.json",
        templateFile: "templates/package.json.hbs",
      },
      {
        type: "add",
        path: "{{dir}}/{{ name }}/README.md",
        templateFile: "templates/README.md.hbs",
      },
      {
        type: "add",
        path: "{{dir}}/{{ name }}/tsconfig.json",
        templateFile: "templates/tsconfig.json.hbs",
      },
      {
        type: "add",
        path: "apps/nextjs/src/app/kit/{{ name }}/constant.ts",
        templateFile: "templates/nextjs/constant.ts.hbs",
      },
      {
        type: "add",
        path: "apps/nextjs/src/app/kit/{{ name }}/introduce.mdx",
        templateFile: "templates/nextjs/introduce.mdx.hbs",
      },
      {
        type: "add",
        path: "apps/nextjs/src/app/kit/{{ name }}/generator.tsx",
        templateFile: "templates/nextjs/generator.tsx.hbs",
      },
      {
        type: "add",
        path: "apps/nextjs/src/app/kit/{{ name }}/page.tsx",
        templateFile: "templates/nextjs/page.tsx.hbs",
      },
      {
        type: "add",
        path: "{{dir}}/{{ name }}/src/index.ts",
        template: "export const name = '{{ name }}';",
      },
      {
        type: "modify",
        path: "{{dir}}/{{ name }}/package.json",
        async transform(content, answers) {
          if ("deps" in answers && typeof answers.deps === "string") {
            const pkg = JSON.parse(content) as PackageJson;
            for (const dep of answers.deps.split(" ").filter(Boolean)) {
              const version = await fetch(
                `https://registry.npmjs.org/-/package/${dep}/dist-tags`,
              )
                .then((res) => res.json())
                .then((json) => json.latest);
              if (!pkg.dependencies) pkg.dependencies = {};
              pkg.dependencies[dep] = `^${version}`;
            }
            return JSON.stringify(pkg, null, 2);
          }
          return content;
        },
      },
      async (answers) => {
        /**
         * Install deps and format everything
         */
        if (
          "name" in answers &&
          typeof answers.name === "string" &&
          "dir" in answers &&
          typeof answers.dir === "string"
        ) {
          // execSync("pnpm dlx sherif@latest --fix", {
          //   stdio: "inherit",
          // });
          execSync("pnpm i", { stdio: "inherit" });
          execSync(
            `pnpm prettier --write ${answers.dir}/${answers.name}/** --list-different`,
          );
          return "Package scaffolded";
        }
        return "Package not scaffolded";
      },
    ],
  });
}
