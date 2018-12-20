import {Config} from 'protractor';


function showConfig() {
    this.configService.getConfig()
        .subscribe((data: Config) => this.config = {
            registrationUrl: data['registrationUrl'],
            textFile:  data['textFile']
        })
        .subscribe(
            (data: Config) => this.config = { ...data }, // success path
            error => this.error = error // error path
        );
}

export interface Config {
    registrationURL: string;
    textFile: string;
}
