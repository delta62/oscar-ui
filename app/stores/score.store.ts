import { FluxStore } from 'flux-lite';
import { Injectable } from '@angular/core';
import { Score } from '../model';
import { DispatcherService } from '../services';

@Injectable()
export class ScoreStore extends FluxStore<Score, any> {

  constructor(dispatcher: DispatcherService) {
    super(dispatcher);
  }

  getInitialState(): Score {
    return { totalScore: 0, responses: [ ] };
  }

  reduce(state: Score, payload: any): Score {
    return state;
  }
}
