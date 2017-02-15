import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'o-textinput',
  styleUrls: [ './textinput.css' ],
  template: `
    <div [ngClass]="{ active: active }">
      <label>
        <div>{{label}}</div>
        <input
          #input
          (focus)="toggleActive(true)"
          (blur)="toggleActive(false)"
          (keyup)="onKey($event)"
          [required]="required"
        >
      </label>
    </div>`
})
export class TextInputComponent {
  active:            boolean = false;
  @Input() label:    string;
  @Input() required: boolean;
  @Output() change:  EventEmitter<string> = new EventEmitter();

  toggleActive(isActive: boolean): void {
    this.active = isActive;
  }

  onKey(event: any): void {
    this.change.emit(event);
  }

}
