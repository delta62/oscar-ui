import { html } from 'lit-html'
import { Component } from '../decorators'

@Component()
export default class BallotComponent extends HTMLElement {
  static tagName = 'o-ballot'

  render() {
    return html`
      <style>
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
      </style>
      <div class="body">
        <o-categories></o-categories>
        <o-copyright></o-copyright>
      </div>
      <o-header></o-header>`
  }
}
