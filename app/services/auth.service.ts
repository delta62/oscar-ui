import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

export type AuthToken = string;

export class AuthService {
  constructor(private http: Http) { }

  login(email: string): Promise<AuthToken> {
    return this.http.get(this.buildUrl())
      .toPromise()
      .then(res => res.json())
      .then(json => json.token);
  }

  private buildUrl(): string {
    return `${AppSettings.baseUrl}/login`;
  }
}
