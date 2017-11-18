import { html } from 'lit-html'
import { Binding, Component } from '../decorators'
import { navigate } from '../router'

@Component()
export default class LinkElement extends HTMLElement {
  static tagName = 'o-link'

  @Binding() href: string = ''

  render({ href }: this) {
    // Don't put href attributes on links if there is none
    return href
      ?  html`<a href$="${href}"><slot></slot></a>`
      : html`<a><slot></slot></a>`
  }
}
