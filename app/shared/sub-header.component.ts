import { Component, Input } from '@angular/core';
import { Location }         from  '@angular/common';

@Component({
  moduleId: module.id,
  styleUrls: [ './sub-header.css' ],
  selector: 'o-sub-header',
  template: `
    <div (click)="back()" class='back'>
      <h5 class='arrow left'></h5>
      <h5>Back</h5>
    </div>
    <h1>{{ title }}</h1>`
})
export class SubHeaderComponent {
  @Input() title: string;

  constructor(private location: Location) { }

  back(): void {
    this.location.back();
  }
}
