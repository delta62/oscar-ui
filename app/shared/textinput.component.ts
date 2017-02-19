import {
  Component,
  Input,
  ViewChild,
  Renderer,
  ElementRef,
  forwardRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const TEXTINPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextInputComponent),
  multi: true
};

@Component({
  moduleId: module.id,
  selector: 'o-textinput',
  styleUrls: [ './textinput.css' ],
  providers: [ TEXTINPUT_VALUE_ACCESSOR ],
  template: `
    <div [ngClass]="{ active: active }">
      <label>
        <div>{{label}}</div>
        <input
          #input
          type="{{ type }}"
          (focus)="onFocus()"
          (blur)="onBlur()"
          (input)="onChange($event.target.value)"
          [disabled]="disabled"
          [required]="required">
      </label>
    </div>`
})
export class TextInputComponent implements ControlValueAccessor {
  active    = false;
  onChange  =  (_: any) => {};
  onTouched =  () => {};

  @Input()            label:    string;
  @Input()            required: boolean;
  @Input()            disabled: boolean;
  @Input()            type:     string;
  @ViewChild('input') input:    ElementRef;

  constructor(private renderer: Renderer) { }

  onBlur(): void {
    this.active = false;
    this.onTouched();
  }

  onFocus(): void {
    this.active = true;
  }

  focus(): void {
    this.renderer.invokeElementMethod(this.input, 'focus');
  }

  writeValue(val: any): void {
    const normalizedVal = val || '';
    this.renderer.setElementProperty(this.input.nativeElement, 'value', normalizedVal);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.renderer.setElementProperty(this.input.nativeElement, 'disabled', isDisabled);
  }
}
