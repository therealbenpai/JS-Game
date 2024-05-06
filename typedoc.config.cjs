/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
    entryPoints: ["src/index.ts", "src/objects.ts", "src/collection.ts"],
    readme: "README.md",
    name: "Benpai's TypeScript Game",
    includeVersion: true,
    cname: 'docs.sparty18.com',
    gaID: 'G-8Z61QGB1L9',
    hideGenerator: true,
    navigationLinks: {
        GitHub: "https://github.com/therealbenpai/JS-Game"
    },
    plugin: ["typedoc-plugin-rename-defaults", "typedoc-plugin-extras", "typedoc-plugin-mdn-links"],
    darkHighlightTheme: "material-theme-darker",
    lightHighlightTheme: "material-theme-ocean",
    commentStyle: "all"
};