module.exports = {
	setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
	testEnvironment: "jest-environment-jsdom",
	moduleNameMapper: {
		"\\.(css|less|scss|sass)$": "identity-obj-proxy",
	},
	transform: {
		"^.+\\.(ts|tsx)$": "babel-jest",
	},
};
