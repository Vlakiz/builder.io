export default class Query {
    constructor(url) {
        this.url = url;
    }

    async send() {
        return fetch(this.url)
            .then(res => res.ok)
            .catch(e => false);
    }
}