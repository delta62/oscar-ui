import { html } from 'lit-html'
import { Binding, Component, Renderable } from '../decorators'
import { registerOutlet } from '../router'

@Component()
export default class RouterOutletComponent extends HTMLElement {
  static tagName = 'o-outlet'

  @Binding() component: Renderable

  connectedCallback() {
    registerOutlet(this)
  }

  render(state: this) {
    return this.component
      ? this.component.render(this.component)
      : html``
  }
}
