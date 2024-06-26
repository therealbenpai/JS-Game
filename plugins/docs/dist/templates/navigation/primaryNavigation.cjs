"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.primaryNavigation = void 0;
const typedoc_1 = require("typedoc");
const utils_1 = require("../utils.cjs");
function primaryNavigation(context, props) {
    // Create the navigation for the current page
    const modules = props.model.project.getChildrenByKind(typedoc_1.ReflectionKind.SomeModule);
    const [ext, int] = (0, utils_1.partition)(modules, (m) => m.flags.isExternal);
    const selected = props.model.isProject();
    const current = selected || int.some((mod) => (0, utils_1.inPath)(mod, props.model));
    function link(mod, fn = utils_1.getComment) {
        const current = (0, utils_1.inPath)(mod, props.model);
        const selected = mod.name === props.model.name;
        let childNav;
        const childModules = mod.children?.filter((m) => m.kindOf(typedoc_1.ReflectionKind.SomeModule));
        if (childModules?.length) {
            childNav = typedoc_1.JSX.createElement("ul", null, childModules.map((it) => link(it)));
        }
        return (typedoc_1.JSX.createElement("li", { class: (0, utils_1.classNames)({ current, selected, deprecated: mod.isDeprecated() }, context.getReflectionClasses(props.model)) },
            typedoc_1.JSX.createElement("a", { href: context.urlTo(mod) },
                typedoc_1.JSX.createElement("div", null,
                    (0, utils_1.wbr)(`${mod.name}${mod.packageVersion !== undefined ? ` - v${mod.packageVersion}` : ''}`),
                    fn(mod))),
            childNav));
    }
    // const comment = props.model.comment || props.model.signatures?.[0].comment
    // console.log(child.comment?.summary?.[0]?.text.split(/(\r\n)+/));
    // const commentContent = comment?.summary?.[0]?.text.split(/(\r\n)+/)[0];
    return (typedoc_1.JSX.createElement("nav", { class: `tsd-navigation primary modules-total-${int.length}` },
        typedoc_1.JSX.createElement("details", { class: "tsd-index-accordion", open: true },
            typedoc_1.JSX.createElement("summary", { class: "tsd-accordion-summary" },
                typedoc_1.JSX.createElement("h3", null,
                    context.icons.chevronDown(),
                    " Modules")),
            typedoc_1.JSX.createElement("div", { class: "tsd-accordion-details" },
                typedoc_1.JSX.createElement("ul", { class: "modules" },
                    typedoc_1.JSX.createElement("li", { class: (0, utils_1.classNames)({ current, selected }) + 'module' },
                        typedoc_1.JSX.createElement("a", { href: context.urlTo(props.model.project) }, (0, utils_1.wbr)(props.project.name)),
                        typedoc_1.JSX.createElement("ul", null, int.map((i) => link(i, utils_1.getReadme)))),
                    ext.map((i) => link(i)))))));
}
exports.primaryNavigation = primaryNavigation;
//# sourceMappingURL=primaryNavigation.js.map