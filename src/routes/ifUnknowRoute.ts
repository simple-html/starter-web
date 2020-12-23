import { routeMatch } from "@simple-html/router";
import { routerConfig } from "./routerConfig";

export function ifUnknowRoute() {
  const mainroute = Object.keys(routerConfig)
    .map((key) => routeMatch(routerConfig[key].href))
    .filter((e) => {
      return e === true;
    }).length;

  const childRoutes = routerConfig.child.children;
  const subroutes = Object.keys(childRoutes)
    .map((key) => routeMatch(childRoutes[key].href))
    .filter((e) => {
      return e === true;
    }).length;

  if (!mainroute && !subroutes) {
    return "unknown route";
  } else {
    return "";
  }
}
