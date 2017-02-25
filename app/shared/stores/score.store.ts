import { FluxStore, Action } from 'flux-lite';
import { Injectable }        from '@angular/core';

import { UserScore, TypeOrPromise, Identifier }  from '../model';
import { DispatcherService, ScoreService }   from '../services';
import { AuthTokenStore }                    from '../stores';
import {
  DidLoginPayload,
  isType,
  IPayload,
  CategoryAnsweredPayload
} from '../payload';

@Injectable()
export class ScoreStore extends FluxStore<Array<UserScore>, IPayload> {
  constructor(
      dispatcher: DispatcherService,
      private scoreService: ScoreService,
      private authTokenStore: AuthTokenStore) {
    super(dispatcher);
  }

  protected getInitialState(): Array<UserScore> {
    return [ ];
  }

  getUserScore(userId: Identifier): UserScore {
    return this.state.find(score => score.userId == userId);
  }

  protected reduce(state: Array<UserScore>, payload: IPayload, action: Action<IPayload>): TypeOrPromise<Array<UserScore>> {
    if (isType(DidLoginPayload, payload) || isType(CategoryAnsweredPayload, payload)) {
      return this.dispatcher.waitFor([ this.authTokenStore.dispatchToken ], action)
        .then(() => this.authTokenStore.state)
        .then(token => this.scoreService.getScores(token));
    }
    return state;
  }
}
