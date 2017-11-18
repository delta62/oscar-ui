import { html } from 'lit-html/lib/lit-extended'
import { Binding, Component } from '../decorators'

@Component()
export default class ButtonComponent extends HTMLElement {
  static tagName = 'o-button'

  @Binding() disabled: boolean = false
  @Binding() text: string = ''

  render({ disabled, text }: this) {
    return html`
      <style>
        button {
          background-color: var(--color-primary-faded);
          border-radius: 0.1em;
          border: solid 1px var(--color-primary);
          color: var(--color-highlight);
          font-size: 1em;
          font-weight: 500;
          opacity: 1;
          padding: 0.3em 0.8em;
          text-transform: uppercase;
          transition: background-color 0.25s, filter 0.25s, opacity 0.25s;
        }

        button:disabled {
          background-color: transparent;
          filter: saturate(10%);
          opacity: 0.6;
        }
      </style>
      <button disabled="${disabled}">${text}</button>
    `
  }
}
