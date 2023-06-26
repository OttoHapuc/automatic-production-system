module.exports = {
    testEnvironment: 'node',
    testPathIgnorePatterns: ['node_modules', '/.next/'],
    collectCoverage:true,
    collectCoverageFrom: ['src/pages/api/**/*.ts(x)'],
    setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
}