export class APIBuilder {
    constructor(private data: any = {}) {}

    addProperty(key: string, value: any) {
        this.data[key] = value;
    }

    toJSON() {
        return JSON.stringify(this.data, null, 2);
    }
}