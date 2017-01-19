import { FluxStore } from 'flux-lite';
import { Injectable } from '@angular/core';
import { Response } from '../model/response';
import { isType, AppInitPayload, SaveResponsePayload } from '../payload';
import { ResponseService } from '../services/response.service';
import { DispatcherService } from '../services/dispatcher.service';

@Injectable()
export class ResponseStore extends FluxStore<Array<Response>, SaveResponsePayload> {

  constructor(
      dispatcher: DispatcherService,
      private responseService: ResponseService) {
    super(dispatcher);
  }

  getInitialState(): Array<Response> {
    return [ ];
  }

  reduce(state: Array<Response>, payload: SaveResponsePayload): Array<Response> | Promise<Array<Response>> {
    if (isType(SaveResponsePayload, payload)) {
      return this.responseService
        .saveResponse(payload.categoryId, payload.value)
        .then(() => this.mergeChanges(state, payload));
    }
    if (isType(AppInitPayload, payload)) {
      return this.responseService.getResponses();
    }
    return state;
  }

  getCategoryResponse(categoryId: string): Response {
    return this.state.find(res => res.category === categoryId);
  }

  private mergeChanges(state: Array<Response>, payload: SaveResponsePayload): Array<Response> {
    let newState: Array<Response> = [ ];
    state.forEach(res => {
      if (res.category !== payload.categoryId) {
        newState.push(res);
      }
    });
    newState.push({ category: payload.categoryId, value: payload.value });

    return newState;
  }
}
