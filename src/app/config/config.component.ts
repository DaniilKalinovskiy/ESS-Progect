import {Config} from 'protractor';


function showConfig() {
    this.configService.getConfig()
        .subscribe((data: Config) => this.config = {
            registrationURL: data['registration'],
            textFile:  data['textFile']
        });
}

export interface Config {
    registrationURL: string;
    textFile: string;
}
