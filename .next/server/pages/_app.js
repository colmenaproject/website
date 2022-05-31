"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: external "simple-react-lightbox"
var external_simple_react_lightbox_ = __webpack_require__(3732);
var external_simple_react_lightbox_default = /*#__PURE__*/__webpack_require__.n(external_simple_react_lightbox_);
;// CONCATENATED MODULE: ./pages/_app.js





// Bootstrap

// Font awesome

// Linea icons





// Animate

// Stylesheet


// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component , pageProps  }) {
    const router = (0,router_namespaceObject.useRouter)();
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    // Loading
    (0,external_react_.useEffect)(()=>{
        const handleStart = ()=>setLoading(true)
        ;
        const handleComplete = ()=>setLoading(false)
        ;
        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);
        return ()=>{
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    });
    // Scroll
    (0,external_react_.useEffect)(()=>{
        let unmounted = false;
        if (!unmounted) {
            // Page loader
            const loader = document.querySelector('.page-loader');
            if (loader) {
                setTimeout(()=>{
                    loader.style.display = 'none';
                }, 300);
            }
            // To top
            const toTop = document.querySelector('.to-top');
            // Scroll event
            window.addEventListener('scroll', function() {
                const mainMenu = document.querySelector('.main-menu-area');
                const pos = window.scrollY;
                // Fixed menu
                if (mainMenu) {
                    if (pos >= 100) {
                        mainMenu.classList.add('fixed-menu', 'animate', 'slideInDown');
                    } else {
                        mainMenu.classList.remove('fixed-menu', 'animate', 'slideInDown');
                    }
                }
                // Scroll to top button
                if (pos >= 500) {
                    toTop.classList.add('fixed-totop');
                } else {
                    toTop.classList.remove('fixed-totop');
                }
            });
            // Scroll spy
            if (router.asPath.split('#').length > 1) {
                const sections = document.querySelectorAll('section[id]');
                window.addEventListener('scroll', function() {
                    const pos = window.scrollY;
                    sections.forEach((el)=>{
                        if (el.offsetTop - 150 <= pos && el.offsetTop + el.clientHeight >= pos) {
                            const getId = el.getAttribute('id');
                            document.querySelectorAll('.nav-item a[href^="/#"]').forEach((link)=>{
                                const activeLink = document.querySelector(`.nav-item a[href^="/#${getId}"]`);
                                if (activeLink) {
                                    link.classList.remove('active');
                                    activeLink.classList.add('active');
                                }
                            });
                        }
                    });
                });
            } else {
                window.addEventListener('scroll', function() {
                    document.querySelectorAll('.nav-item a[href^="/#"]').forEach((link)=>{
                        link.classList.remove('active');
                    });
                });
            }
        }
        return ()=>unmounted = true
        ;
    });
    return /*#__PURE__*/ jsx_runtime_.jsx((external_simple_react_lightbox_default()), {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
};


/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3732:
/***/ ((module) => {

module.exports = require("simple-react-lightbox");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152], () => (__webpack_exec__(1966)));
module.exports = __webpack_exports__;

})();