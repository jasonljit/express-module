module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"es6": true,
		"node": true
	},
	"extends": "eslint:recommended",
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parserOptions": {
		"ecmaVersion": 2018
	},
	"plugins": [
		"async-await",
	],
	"rules": {
		"no-console": "warn",
		"async-await/space-after-async": "error",
		"async-await/space-after-await": "error",
		"semi": "error",
		"indent": ["error", "tab", {"SwitchCase": 1}],
		"no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 1 }],
		"newline-after-var": "error",
		"object-curly-spacing": ["error", "always"],
		"keyword-spacing": "error",
		"space-in-parens": ["error", "never"],
		"space-before-blocks": "error",
		"arrow-spacing": "error",
		"space-infix-ops": "error"
	}
};
