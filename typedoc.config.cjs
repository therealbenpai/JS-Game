/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
    entryPoints: ["src/index.ts", "src/objects.ts", "src/collection.ts"],
    readme: "none",
    name: "Benpai's TypeScript Game",
    plugin: ["typedoc-plugin-rename-defaults", "typedoc-plugin-extras", "typedoc-plugin-mdn-links"],
    darkHighlightTheme: "material-theme-darker",
    lightHighlightTheme: "material-theme-ocean",
    commentStyle: "all"
};