import { Binding, Component } from '../decorators'
import { registerOutlet } from '../router'

@Component({
  tag: 'o-outlet',
  template: ''
})
export default class RouterOutletComponent extends HTMLElement {
  connectedCallback() {
    registerOutlet(this)
  }

  @Binding() set component(val: HTMLElement) {
    while (this.shadowRoot.firstChild) {
      this.shadowRoot.removeChild(this.shadowRoot.firstChild)
    }
    this.shadowRoot.appendChild(val)
  }
}
