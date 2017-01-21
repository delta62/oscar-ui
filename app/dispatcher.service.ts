import { Injectable } from '@angular/core';
import { Dispatcher } from 'flux-lite';
import { IPayload } from './payload';

@Injectable()
export class DispatcherService extends Dispatcher<IPayload> { }
