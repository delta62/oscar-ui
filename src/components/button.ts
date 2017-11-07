import { Binding, Component } from '../decorators'

@Component({
  tag: 'o-button',
  styles: `
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
  `,
  template: `
    <div>
      <button></button>
    </div>`
})
export default class extends HTMLElement {
  @Binding() set disabled(val: boolean) {
    this.$<HTMLButtonElement>('button').disabled = val
  }

  @Binding() set text(val: string) {
    this.$<HTMLButtonElement>('button').innerText = val
  }
}
