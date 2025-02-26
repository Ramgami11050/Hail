import type { ExtensionSettings, Language } from "./types";
import { DICTIONARY, DEFAULT_SETTINGS } from "./constants";

// used to generate a pseudo-random value for every title
// so that the random thumbnails always match
export function getStringSeed (str: string, max: number) {
    let seed = 0;
    for (let i = 0; i < str.length; i++)
        seed += str.charCodeAt(i);
    seed = seed % max;
    return seed;
}

// observe dom element changes
export function onElement (
    selector: string, 
    callback: (elem: HTMLElement, type: string, ...args: any[]) => void, 
    config: MutationObserverInit, 
    targetNode: HTMLElement = document.body
) {
    const observer = new MutationObserver((mutationsList) => {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(node => {
                    const elem = node as HTMLElement;
                    if (elem.nodeType === 1 && elem.matches(selector)) {
                        callback(elem, 'added');
                    }
                });
            } else if (mutation.type === 'attributes') {
                const elem = mutation.target as HTMLElement;
                if (elem.matches(selector)) {
                    //// console.log(mutation.attributeName);
                    callback(elem, 'attributes', mutation.attributeName);
                }
            }
        }
    });

    observer.observe(targetNode, config);
    return observer;
}

export function getPageLanguage (): Language {
    const lang = document.documentElement.lang.split('-')[0].toLowerCase();
    if (Object.keys(DICTIONARY).includes(lang))
        return lang as Language;
    return 'en';
}


export async function updateSettings <K extends keyof ExtensionSettings>(key: K, value: ExtensionSettings[K]) {
    const settings = await getSettings();
    settings[key] = value;
    await browser.storage.sync.set({ settings });
}

export async function getSettingsItem <K extends keyof ExtensionSettings> (key: K): Promise<ExtensionSettings[K]> {
    const settings = await getSettings();
    console.log(settings);
    return settings[key];
}

export async function getSettings (): Promise<ExtensionSettings> {
    const settings = (await browser.storage.sync.get('settings')).settings as ExtensionSettings;
    return settings ?? DEFAULT_SETTINGS;
}
