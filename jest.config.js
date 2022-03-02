module.exports = {
    preset: '@nuxt/test-utils',
    moduleFileExtensions: ['js', 'json', 'vue'],
    collectCoverage: true,
    collectCoverageFrom: [
        "@/pages/*.vue"
    ]
}