module.exports = {
	preset: "ts-jest",
	verbose: true,
	setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
	moduleNameMapper: {
		"\\.(css|less|scss|sss|styl)$":
			"<rootDir>/node_modules/identity-obj-proxy",
	},
	transform: {
		"\\.[jt]sx?$": "babel-jest",
		"\\.css$": "jest-transform-css",
	},
   transformIgnorePatterns: [
      "node_modules/(?!variables/.*)"
    ]
};
