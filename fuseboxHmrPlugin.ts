// USED BY BUNDLER- DO NOT EDIT

import { HMRHelper, HMRPayload } from 'fuse-box/types/hmr';
export default function (payload: HMRPayload, helper: HMRHelper) {
    const { updates } = payload;

    // event for @simple-html/core, so it stores state etc
    window.dispatchEvent(new CustomEvent('SIMPLE_HTML_SAVE_STATE'));

    if (helper.isStylesheeetUpdate) {
        helper.flushModules(updates);

        helper.updateModules();

        helper.callModules(updates);
    } else {
        helper.flushAll();
        helper.updateModules();

        helper.callEntries();
    }
}