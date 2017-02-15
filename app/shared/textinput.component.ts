import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'o-textinput',
  styleUrls: [ './textinput.css' ],
  template: `
    <div [ngClass]="{ active: active }">
      <label>
        <div>{{label}}</div>
        <input (focus)="toggleActive(true)" (blur)="toggleActive(false)" [required]="required">
      </label>
    </div>`
})
export class TextInputComponent {
  active: boolean = false;
  @Input() label: string;
  @Input() required: boolean;

  toggleActive(isActive: boolean): void {
    this.active = isActive;
  }

}
