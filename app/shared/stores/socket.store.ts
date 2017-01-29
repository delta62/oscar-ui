import { Injectable } from '@angular/core';
import { FluxStore } from 'flux-lite';
import { isType, DidLoginPayload, IPayload, CategoryClosedPayload, CategoryAnsweredPayload, CategoryOpenedPayload } from '../payload';
import { DispatcherService, SocketEmitter, SocketService } from '../services';

@Injectable()
export class SocketStore extends FluxStore<SocketEmitter, IPayload> {

  constructor(dispatcher: DispatcherService, private socketService: SocketService) {
    super(dispatcher);
  }

  getInitialState(): SocketEmitter {
    return null;
  }

  reduce(state: SocketEmitter, payload: IPayload): SocketEmitter {
    if (isType(DidLoginPayload, payload)) {
      let socket = this.socketService.connect();
      this.initSocketListeners(socket);
      return socket;
    }
    return state;
  }

  private initSocketListeners(socket: SocketEmitter): void {
      socket.on('categoryClosed', data => this.dispatcher.dispatch(
        new CategoryClosedPayload(data)));
      socket.on('categoryAnswered', data => this.dispatcher.dispatch(
        new CategoryAnsweredPayload(data)));
      socket.on('categoryOpened', data => this.dispatcher.dispatch(
        new CategoryOpenedPayload(data)));
  }
}
