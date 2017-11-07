import { Component } from '../decorators'

@Component({
  tag: 'o-ballot',
  styles: `
    :host {
      display: block;
      height: 100vh;
    }

    o-header {
      position: fixed;
      top: 0;
    }

    .body {
      margin-top: 2.5em;
    }
  `,
  template: `
    <div class="body">
      <o-copyright></o-copyright>
    </div>
    <o-header></o-header>
  `
})
export default class BallotComponent extends HTMLElement {
  constructor() {
    super()
  }
}
