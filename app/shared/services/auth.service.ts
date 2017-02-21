import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { AuthToken } from '../model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
  constructor(private http: Http) { }

  login(email: string): Promise<void> {
    return <any>this.http
      .post(this.loginUrl, { email })
      .toPromise();
  }

  loginWithPin(email: string, pin: string): Promise<AuthToken> {
    return this.http.post(this.pinUrl, { email, pin })
      .toPromise()
      .then(res => res.json())
      .then(json => json.token);
  }

  private get loginUrl(): string {
    return `${AppSettings.baseUrl}/login`;
  }

  private get pinUrl(): string {
    return `${AppSettings.baseUrl}/pin`;
  }
}
