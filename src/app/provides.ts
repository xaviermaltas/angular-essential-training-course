import { InjectionToken } from "@angular/core";

export const lookupListToken = new InjectionToken('lookupListsToken');

export const lookupLists = {
    mediums: ['Movies', 'Series']
};