const configUrl = 'assets/tsconfig.json';

function getConfig() {
    return this.http.get(this.configUrl);
}

