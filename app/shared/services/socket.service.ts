import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {
  private socket: SocketIOClient.Socket;

  connect(): void {
    this.socket = io('http://localhost:3001');
    this.socket.on('connected', () => {
      console.log('connected');
    });
    // this.socket.addEventListener('open', () => {
    //   console.log(`Opened websocket connection to server at ${AppSettings.baseUrl}`);
    // });
  }

  disconnect(): void {
    this.socket.close();
  }
}
