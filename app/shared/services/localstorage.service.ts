import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  setItem(key: string, val: string): void {
    localStorage.setItem(key, val);
  }

  getItem(key: string): string {
    return localStorage.getItem(key);
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
