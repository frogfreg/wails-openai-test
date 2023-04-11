import { GetMessage, GetNames } from "../wailsjs/go/main/App.js";

export function messageFetcher() {
    return GetMessage().then((message) => message);
}
export function namesFetcher() {
    return GetNames().then((names) => names);
}
