import { Injectable } from '@angular/core';

export type EmitterCallback = (payload: any) => void;

export interface SocketEmitter {
  on(eventName: string, cb: EmitterCallback): void;
  close(): void;
}

@Injectable()
export class SocketService {

  connect(): SocketEmitter {
    return io('http://localhost:3001');
  }

  disconnect(socket: SocketEmitter): void {
    socket.close();
  }
}
