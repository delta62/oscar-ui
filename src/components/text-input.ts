import { html } from 'lit-html/lib/lit-extended'
import { spacify } from '../collections'
import { Binding, Component } from '../decorators'

@Component()
export default class TextInputComponent extends HTMLElement {
  static tagName = 'o-text-input'

  @Binding() label: string = ''
  @Binding() value: string = ''

  private classes: Set<string> = new Set()

  render({ onBlur, onFocus, label, value, classes, onInput }: this) {
    return html`
    <style>
      :host {
        display: inline-block;
      }

      div {
        border-bottom: solid 0.2em var(--color-primary);
        position: relative;
      }

      div::after {
        background-color: var(--color-highlight);
        bottom: -.2em;
        content: '';
        height: .2em;
        left: 0;
        position: absolute;
        transition: .2s;
        width: 0;
      }

      label {
        display: block;
        font-size: .75em;
        color: var(--color-primary);
        text-transform: uppercase;
        transition: .2s color;
      }

      input {
        background-color: transparent;
        border: none;
        color: var(--color-primary);
        margin: 0;
        font-size: 1.21em;
        padding: .5em 0;
        width: 16em;
      }

      input:focus {
        color: var(--color-highlight);
        outline: none;
      }

      .active label {
        color: var(--color-highlight);
      }

      .active::after {
        width: 100%;
      }
    </style>
    <div class$="${spacify(classes)}">
      <label for="input">${label}</label>
      <input
        on-input="${onInput.bind(this)}"
        on-blur="${onBlur.bind(this)}"
        on-focus="${onFocus.bind(this)}"
        value="${value}"
        id="input">
    </div>`
  }

  private onBlur() {
    this.classes.delete('active');
    (this as any).scheduleRender()
  }

  private onFocus() {
    this.classes.add('active');
    (this as any).scheduleRender()
  }

  private onInput(e: any) {
    this.value = e.currentTarget.value
  }
}
