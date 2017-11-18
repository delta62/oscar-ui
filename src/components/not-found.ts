import { html } from 'lit-html'
import { Component } from '../decorators'
import { back } from '../router'

@Component()
export default class NotFoundComponent extends HTMLElement {
  static tagName = 'o-not-found'

  render({ onBack }: this) {
    return html`
      <h1>Not found, bro</h1>
      <o-link on-click="${onBack}">Back</o-link>
      <o-link href="/">Go home</o-link>
    `
  }

  private onBack() {
    back()
  }
}
