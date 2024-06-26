"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.secondaryNavigation = void 0;
const typedoc_1 = require("typedoc");
const utils_1 = require("../utils.cjs");
function secondaryNavigation(context, props) {
    // Multiple entry points, and on main project page.
    // if (props.model.isProject() && props.model.getChildrenByKind(ReflectionKind.Module).length) {
    //   return;
    // }
    const effectivePageParent = (props.model instanceof typedoc_1.ContainerReflection && props.model.children?.length) ||
        props.model.isProject()
        ? props.model
        : props.model.parent;
    const children = effectivePageParent.children || [];
    const pageNavigation = children
        .filter((child) => !child.kindOf(typedoc_1.ReflectionKind.SomeModule))
        .map((child) => {
        return (typedoc_1.JSX.createElement("li", { class: (0, utils_1.classNames)({ deprecated: child.isDeprecated(), current: props.model === child }, context.getReflectionClasses(child)) },
            typedoc_1.JSX.createElement("a", { href: context.urlTo(child), class: "tsd-index-link" },
                context.icons[child.kind](),
                typedoc_1.JSX.createElement("div", null,
                    (0, utils_1.renderName)(child),
                    (0, utils_1.getComment)(child)))));
    });
    if (effectivePageParent.kindOf(typedoc_1.ReflectionKind.SomeModule | typedoc_1.ReflectionKind.Project)) {
        return (typedoc_1.JSX.createElement("nav", { class: "tsd-navigation secondary menu-sticky" }, !!pageNavigation.length && typedoc_1.JSX.createElement("ul", null, pageNavigation)));
    }
    return (typedoc_1.JSX.createElement("nav", { class: "tsd-navigation secondary menu-sticky" },
        typedoc_1.JSX.createElement("ul", null,
            typedoc_1.JSX.createElement("li", { class: (0, utils_1.classNames)({
                    deprecated: effectivePageParent.isDeprecated(),
                    current: effectivePageParent === props.model,
                }, context.getReflectionClasses(props.model)) },
                typedoc_1.JSX.createElement("a", { href: context.urlTo(effectivePageParent), class: "tsd-index-link" },
                    context.icons[effectivePageParent.kind](),
                    typedoc_1.JSX.createElement("div", null,
                        (0, utils_1.renderName)(effectivePageParent),
                        (0, utils_1.getComment)(props.model))),
                !!pageNavigation.length && typedoc_1.JSX.createElement("ul", null, pageNavigation)))));
}
exports.secondaryNavigation = secondaryNavigation;
//# sourceMappingURL=secondaryNavigation.js.map