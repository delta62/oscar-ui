import { Binding, Component } from '../decorators'

@Component({
  tag: 'o-text-input',
  styles: `
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
  `,
  template: `
    <div>
      <label for="input"></label>
      <input id="input" type="text">
    </div>`
})
export default class extends HTMLElement {
  connectedCallback() {
    this.$('input').addEventListener('focus', this.onFocus.bind(this))
    this.$('input').addEventListener('blur', this.onBlur.bind(this))
  }

  @Binding() set label(val: string) {
    this.$('label').innerText = val
  }

  @Binding() set pattern(val: string) {
    this.$<HTMLInputElement>('input').pattern = val
  }

  get value() {
    return this.$<HTMLInputElement>('input').value
  }

  private onFocus() {
    this.$('div').classList.add('active')
  }

  private onBlur() {
    this.$('div').classList.remove('active')
  }
}
