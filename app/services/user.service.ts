import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from '../model';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  createAccount(email: string, name: string): Promise<void> {
    let body = { email, name };
    return this.http.post(this.buildAccountUrl(), body)
      .toPromise()
      .then(_ => null);
  }

  getUser(authToken: string): Promise<User> {
    let headers = new Headers({ Authorization: `Bearer ${authToken}` });
    return this.http.get(this.buildAccountUrl(), { headers })
      .toPromise()
      .then(res => res.json());
  }

  private buildAccountUrl(): string {
    return `${AppSettings.baseUrl}/user`;
  }
}
