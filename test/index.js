const test = require("ava");
const { CLIEngine } = require("eslint");

test("validate rule syntax", (t) => {
	const linter = new CLIEngine({
		configFile: "index.js",
		useEslintrc: false,
	});

	const report = linter.executeOnFiles("test/testFile.ts");

	t.is(report.errorCount, 0, JSON.stringify(report.results[0].messages));
});
