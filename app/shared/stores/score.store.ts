import { FluxStore, Action } from 'flux-lite';
import { Injectable }        from '@angular/core';

import { Score, TypeOrPromise, Identifier }  from '../model';
import { DidLoginPayload, isType, IPayload } from '../payload';
import { DispatcherService, ScoreService }   from '../services';
import { AuthTokenStore }                    from '../stores';

@Injectable()
export class ScoreStore extends FluxStore<Array<Score>, IPayload> {
  constructor(
      dispatcher: DispatcherService,
      private scoreService: ScoreService,
      private authTokenStore: AuthTokenStore) {
    super(dispatcher);
  }

  getInitialState(): Array<Score> {
    return [ ];
  }

  getUserScore(userId: Identifier): Score {
    return this.state.find(score => score.userId == userId);
  }

  reduce(state: Array<Score>, payload: IPayload, action: Action<IPayload>): TypeOrPromise<Array<Score>> {
    if (isType(DidLoginPayload, payload)) {
      return this.dispatcher.waitFor([ this.authTokenStore.dispatchToken ], action)
        .then(() => this.authTokenStore.state)
        .then(token => this.scoreService.getScores(token));
    }
    return state;
  }
}
