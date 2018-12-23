import {HttpHeaders} from '@angular/common/http';
import {Config} from '../config/config.component';
import {HttpClient} from '@angular/common/http';

export class RegistrationService {
    config: Config;
    http: HttpClient;

     httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'my-auth-token'
        })
    };

    addPerson(person: Object) {
        return this.http.post(this.config.registrationURL, person, this.httpOptions);
    }
}
