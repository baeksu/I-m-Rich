import { StorageInterface } from "./StorageInterface.js";

export class LocalStorageImpl extends StorageInterface {
    save(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
}
