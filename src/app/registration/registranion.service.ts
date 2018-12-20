import {HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {Config} from '../config/config.component';

export class RegistrationService {
    config: Config;

     httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'my-auth-token'
        })
    };

    addPerson(person: Object) {
        return this.http.post(this.config.registrationURL, person, this.httpOptions)
            .pipe(
                catchError(this.handleError('addPerson'))
            );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    }

}
