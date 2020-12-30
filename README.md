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

Install `@seancroach/eslint-config-typescript` and its peer dependencies through
`npm`:

```
npm install --save-dev @seancroach/eslint-config-typescript prettier eslint
```

## Usage

You can configure ESlint a variety of ways. I suggest to do a majority of your
configurations from your `package.json`:

```json
{
	"name": "my-cool-project",
	"eslintConfig": {
		"extends": "@seancroach/eslint-config-typescript"
	}
}
```

## License

This package is available as open source under the terms of the [MIT License](https://github.com/seancroach/eslint-config-typescript/blob/latest/LICENSE.md).
