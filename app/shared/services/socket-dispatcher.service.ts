import { Injectable } from '@angular/core';
import { DispatcherService } from './dispatcher.service';
import { SocketService } from './socket.service';

@Injectable()
export class SocketDispatcherService {

  constructor(private socketService: SocketService, private dispatcher: DispatcherService) { }

  registerEvents(): void {
    let socketListener = this.socketService.connect();
    socketListener.on('helloworld', () => console.log('hello world'));
  }

}
