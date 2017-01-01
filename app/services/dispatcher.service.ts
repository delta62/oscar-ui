import { Injectable } from '@angular/core';
import { Dispatcher } from 'flux-lite';

@Injectable()
export class DispatcherService extends Dispatcher<any> { }
