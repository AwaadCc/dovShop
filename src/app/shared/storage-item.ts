export interface StorageItem {
    name: string;
    desc: string;
    url: string;
    image: string;
    packages: Array<string>;
    changelog: Array<string>;
}