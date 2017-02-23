import { Component, Input } from '@angular/core';
import { Location }         from  '@angular/common';

@Component({
  selector: 'o-sub-header',
  template: `
    <span (click)="back()">Back</span>
    <h1>{{ title }}</h1>
  `
})
export class SubHeaderComponent {
  @Input() title: string;

  constructor(private location: Location) { }

  back(): void {
    this.location.back();
  }
}
