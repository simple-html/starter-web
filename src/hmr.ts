import { applyPolyfill, ReflowStrategy } from "custom-elements-hmr-polyfill";
/**
 * This enables native web components to be redefined
 * https://github.com/vegarringdal/custom-elements-hmr-polyfill
 */
applyPolyfill(ReflowStrategy.NONE);
