import { Binding, Component } from '../decorators'
import { navigate } from '../router'

@Component({
  tag: 'o-link',
  template: `
    <a></a>
  `
})
export default class LinkElement extends HTMLElement {
  connectedCallback() {
    this.$('a').innerHTML = this.innerHTML
  }

  @Binding() set href(value: string) {
    this.$('a').setAttribute('href', value)
  }
}
