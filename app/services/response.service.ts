import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import { AuthTokenStore } from '../stores/auth-token.store';
import { Response } from '../model/response';

@Injectable()
export class ResponseService {

  constructor(private http: Http, private authStore: AuthTokenStore) { }

  saveResponse(categoryId: string, response: string): Promise<void> {
    let url = this.buildCategoryResponseUrl(categoryId);
    let opts = this.buildRequestOptions();
    let data = { value: response };
    return this.http.put(url, data, opts)
      .toPromise()
      .then(() => null);
  }

  getResponses(): Promise<Array<Response>> {
    let url = this.buildResponseBrowseUrl();
    let opts = this.buildRequestOptions();
    return this.http.get(url, opts)
      .toPromise()
      .then(res => res.json());
  }

  private buildRequestOptions(): RequestOptionsArgs {
    let token = this.authStore.state;
    let headers = new Headers({
      Authorization: `Bearer ${token}`
    });
    return { headers };
  }

  private buildCategoryResponseUrl(categoryId: string): string {
    return `${AppSettings.baseUrl}/response/${categoryId}`;
  }

  private buildResponseBrowseUrl(): string {
    return `${AppSettings.baseUrl}/response`;
  }
}
