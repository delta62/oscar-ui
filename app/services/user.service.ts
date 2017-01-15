import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  createAccount(email: string, name: string): Promise<void> {
    let body = { username: email, name };
    return this.http.post(this.buildAccountUrl(), body)
      .toPromise()
      .then(_ => null);
  }

  private buildAccountUrl(): string {
    return `${AppSettings.baseUrl}/user`;
  }
}
