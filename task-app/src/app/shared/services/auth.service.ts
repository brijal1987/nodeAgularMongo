import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { appConfig } from '../../app.config';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(creds): Observable<any> {
    console.log(creds);
    return this.http.post(appConfig.apiUrl + '/login', creds);
  }

}
