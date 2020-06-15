import smoothscroll from "smoothscroll-polyfill";
// @ts-ignore
import store from "@app/store";
import "../styles/index.styl";
import { useEffect } from "react";
function getElementPosition(el) {
    const docEl = document.documentElement;
    const docRect = docEl.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    return {
        x: elRect.left - docRect.left,
        y: elRect.top - docRect.top,
    };
}
function useSmoothscroll() {
    useEffect(() => {
        smoothscroll.polyfill();
    }, []);
}
const enhanceApp = ({ routes, hooks }) => {
    hooks.push(useSmoothscroll);
    routes.shouldUpdateScroll = (prevRouterProps, { location }) => {
        // if (savedPosition) {
        //   return window.scrollTo({
        //     top: savedPosition.y,
        //     behavior: 'smooth',
        //   })
        // }
      if (location.hash) {
            if (store.$get("disableScrollBehavior")) {
                return false;
            }
            const targetElement = document.querySelector(location.hash);
            if (targetElement) {
                return window.scrollTo({
                    top: getElementPosition(targetElement).y,
                    behavior: "smooth",
                });
            }
        }
        else {
            return window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };
};
export default enhanceApp;
//# sourceMappingURL=enhanceApp.js.map
