import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import { Response } from '../model';

@Injectable()
export class ResponseService {

  constructor(private http: Http) { }

  saveResponse(authToken: string, categoryId: string, response: string): Promise<void> {
    let url = this.buildCategoryResponseUrl(categoryId);
    let opts = this.buildRequestOptions(authToken);
    let data = { value: response };
    return this.http.put(url, data, opts)
      .toPromise()
      .then(() => null);
  }

  getResponses(authToken: string): Promise<Array<Response>> {
    let url = this.buildResponseBrowseUrl();
    let opts = this.buildRequestOptions(authToken);
    return this.http.get(url, opts)
      .toPromise()
      .then(res => res.json());
  }

  private buildRequestOptions(authToken: string): RequestOptionsArgs {
    let headers = new Headers({
      Authorization: `Bearer ${authToken}`
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
