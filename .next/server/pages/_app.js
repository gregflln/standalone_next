"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./assets/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.5915b722.png","height":117,"width":241,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAQAAAAZxLZ7AAAAQklEQVR42g3BsQpFAAAF0Lu93mJQFt+gTMogJbMyKBOj2ejrT5wTUZtNKqW/xGR36kVh0Mb4XRw2l8cdjeK76vxEXgsgJdJhLS+lAAAAAElFTkSuQmCC"});
// EXTERNAL MODULE: ./components/Container.js
var Container = __webpack_require__(2369);
;// CONCATENATED MODULE: ./components/Header.js





function Header() {
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "bg-blue-500",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Container/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "p-5 text-white flex justify-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: logo,
                            objectFit: "contain",
                            width: 100,
                            height: 50
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                        className: "flex gap-x-5 text-lg items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/missions",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Nos missions"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/qui-sommes-nous",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Qui sommes nous ?"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/gem",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Le GEM"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/Footer.js





function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "bg-blue-500 justify-self-end",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Container/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "p-10 text-white flex justify-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-1/3 flex align-center justify-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: logo,
                                objectFit: "contain",
                                width: 125,
                                height: 50
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-1/3",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-2xl font-semibold mb-4",
                                children: "Nous contacter"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "02 38 25 04 79"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "pleyades@wanadoo.fr"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-1/3",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-2xl font-semibold mb-4",
                                children: "Nous rencontrer"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "2 Rue Bossuet, 45160 Olivet"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Lundi au jeudi de 8h00 \xe0 12h00 et de 13h30 \xe0 16h30 et le vendredi de 9h \xe0 12h"
                            })
                        ]
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: external "@fortawesome/react-fontawesome"
const react_fontawesome_namespaceObject = require("@fortawesome/react-fontawesome");
;// CONCATENATED MODULE: external "@fortawesome/free-solid-svg-icons"
const free_solid_svg_icons_namespaceObject = require("@fortawesome/free-solid-svg-icons");
;// CONCATENATED MODULE: ./components/TopBar.js





function topBar() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full bg-black text-white font-bold text-right p-2",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "tel:+33238250479",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: "02 38 25 04 79"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                "Du Lundi au jeudi de 9h a 12h30 et 13h30 a 17h vendredi de 9h \xe0 12h"
            ]
        })
    });
};

// EXTERNAL MODULE: ./components/atom/Title.js
var Title = __webpack_require__(361);
// EXTERNAL MODULE: ./components/atom/Text.js
var Text = __webpack_require__(2790);
// EXTERNAL MODULE: ./components/bloc/Bloc.js
var Bloc = __webpack_require__(9285);
;// CONCATENATED MODULE: ./components/bloc/Maps.js





function Maps() {
    return /*#__PURE__*/ jsx_runtime_.jsx(Bloc/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Title/* default */.Z, {
                    text: "Ou sommes nous ?"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Text/* default */.Z, {
                    text: "Vous pouvez vous rendre a PLEYADES sans rendez quand vous en avez besoin. Nous sommes ouvert du lundi au vendredi de 8h30 \xe0 12h30 et de 13h30 a 17h"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                    className: "maps mt-10",
                    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d531.4342532932073!2d1.9291694100251378!3d47.834543386138726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e4e4089b6900e9%3A0x1efeccc613df4a81!2sPleyades%20Association!5e0!3m2!1sfr!2sfr!4v1658486024205!5m2!1sfr!2sfr",
                    loading: "lazy",
                    referrerpolicy: "no-referrer-when-downgrade"
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./pages/_app.js







function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col h-screen justify-between",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "PLEYADES"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(topBar, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                ...pageProps
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Maps, {})
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [473,61,147], () => (__webpack_exec__(8190)));
module.exports = __webpack_exports__;

})();