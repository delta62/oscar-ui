import { Component } from '../decorators'

@Component({
  tag: 'o-copyright',
  template: `&copy; Sam & Codi Noedel, 2017`,
  styles: `
    :host {
      align-items: center;
      border-image: linear-gradient(to right, black, var(--color-primary), black) 100% 1;
      border-style: solid;
      border-width: 0.2rem 0 0 0;
      display: flex;
      font-size: 0.8em;
      font-weight: 300;
      height: 2.5em;
      justify-content: center;
      padding: 0 1em;
    }`
})
export default class extends HTMLElement { }
