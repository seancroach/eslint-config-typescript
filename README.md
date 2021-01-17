# @seancroach/eslint-config-typescript

<p align="left">
  <a href="https://github.com/seancroach/eslint-config-typescript/actions?query=workflow%3ACI">
    <img alt="build status" src="https://img.shields.io/github/workflow/status/seancroach/eslint-config-typescript/CI?logo=GitHub">
  </a>
  <a href="https://www.npmjs.com/package/@seancroach/eslint-config-typescript">
    <img alt="downloads" src="https://img.shields.io/npm/dt/@seancroach/eslint-config-typescript?logo=npm">
  </a>
</p>

_A shared ESLint configuration I use across my TypeScript projects._

## Highlights

- Enforces all the recommended TypeScript practices
- Ensures your code adheres to the [Prettier Style Guide](https://prettier.io/)
- Lints your import statements to follow the best conventions
- Applies best practices on ESLint directive comments such as
  `/* eslint-disable */`

Like many shared configurations, you _could_ write all the configurations
yourself, but why do that when it's already right here to use!

## Installation

`@seancroach/eslint-config-typescript` has a few peer dependencies that have to
be downloaded alongside it:

- [`eslint`](https://eslint.org/)
- [`prettier`](https://prettier.io/)
- [`typescript`](https://www.typescriptlang.org/)

Install `@seancroach/eslint-config-typescript` and its peer dependencies through
`npm`:

```
npm install --save-dev @seancroach/eslint-config-typescript eslint prettier typescript
```

## Usage

You can configure ESlint a variety of ways; refer to the documentation [here](https://eslint.org/docs/user-guide/configuring) for more info.

I suggest to do your
configurations from your `package.json` whenever possible to reduce the amount of dotfiles in your project. For example, in your `package.json`, do the following:

```json
{
	"name": "my-cool-project",
	"eslintConfig": {
		"extends": "@seancroach/eslint-config-typescript"
	}
}
```

By default, `@seancroach/eslint-config-typescript` will look for a `tsconfig.eslint.json` file in your workspace directory. It is advised your `tsconfig.eslint.json` file looks like so:

```jsonc
{
  "extends": "<path to (root) tsconfig>",
  "compilerOptions": {
    // Ensure no one accidentally builds the "lint" project.
    "noEmit": true
  },
  "include": [
    // Include all TypeScript files.
    "**/*.ts"
  ]
}
```

## License

This package is available as open source under the terms of the [MIT License](https://github.com/seancroach/eslint-config-typescript/blob/latest/LICENSE.md).
