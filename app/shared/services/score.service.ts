import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Score } from '../model';

@Injectable()
export class ScoreService {

  constructor(private http: Http) { }

  getScores(authToken: string): Promise<Array<Score>> {
    let headers = new Headers({
      Authorization: `Bearer ${authToken}`
    });
    return this.http.get(this.buildScoresUrl(), { headers })
      .toPromise()
      .then(res => res.json());
  }

  private buildScoresUrl(): string {
    return `${AppSettings.baseUrl}/score`;
  }
}
