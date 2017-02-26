import { Injectable } from '@angular/core';

export type EmitterCallback = (payload: any) => void;

export interface SocketEmitter {
  on(eventName: string, cb: EmitterCallback): void;
  close(): void;
}

@Injectable()
export class SocketService {

  connect(): SocketEmitter {
    return io(`${AppSettings.baseUrl}`);
  }

  disconnect(socket: SocketEmitter): void {
    socket.close();
  }
}
