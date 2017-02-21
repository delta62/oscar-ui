import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'o-button',
  styleUrls: [ './button.css' ],
  template: `
    <div>
      <button [disabled]="disabled" (click)="onClick()">{{label}}</button>
    </div>`
})
export class ButtonComponent {
  @Input() disabled: boolean;
  @Input() label: string;
  @Output() click: EventEmitter<void> = new EventEmitter<void>();

  onClick(): void {
    this.click.emit();
  }
}
