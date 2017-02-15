import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'o-button',
  styleUrls: [ './button.css' ],
  template: `
    <div>
      <button [disabled]="disabled">{{label}}</button>
    </div>`
})
export class ButtonComponent {
  @Input() disabled: boolean;
  @Input() label: string;
}
