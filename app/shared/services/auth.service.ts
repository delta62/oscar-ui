import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuthToken } from '../model/auth-token';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
  constructor(private http: Http) { }

  login(email: string): Promise<AuthToken> {
    return this.http.post(this.buildLoginUrl(), this.buildLoginBody(email))
      .toPromise()
      .then(res => res.json())
      .then(json => json.token);
  }

  private buildLoginBody(email: string): any {
    return { email };
  }

  private buildLoginUrl(): string {
    return `${AppSettings.baseUrl}/login`;
  }
}
