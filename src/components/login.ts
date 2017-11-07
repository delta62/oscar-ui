import { Component } from '../decorators'
import { loginAction } from '../actions/login'
import { present } from '../model'

@Component({
  tag: 'o-login',
  styles: `
    :host {
      display: block;
    }
  `,
  template: `
    <o-login-banner></o-login-banner>
    <form>
      <div class="form-item">
        <o-text-input id="email" label="Email"></o-text-input>
        <o-button id="submit" text="Log In"></o-button>
      </div>

      <div class="text">
        Check your email for a one-time PIN to log in with.
      </div>

      <div class="form-item">
        <o-text-input label="PIN" pattern="[A-Za-z0-9]{6}"></o-text-input>
        <o-button text="Log In"></o-button>
      </div>

      <span class="text">
        I didn't recognize that email or your PIN was incorrect.
      </span>

      <div class="form-item">
        <a>Create Account</a>
      </div>
    </form>
    <o-copyright></o-copyright>
  `
})
export default class extends HTMLElement {
  connectedCallback() {
    this.$('#submit').addEventListener('click', this.onSubmit.bind(this))
  }

  private onSubmit() {
    const email = this.$<any>('#email').value
    loginAction({ email }, present)
  }
}
