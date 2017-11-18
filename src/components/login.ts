import { html } from 'lit-html'
import { Binding, Component } from '../decorators'
import { loginAction } from '../actions/login'
import { present } from '../model'
import { show } from '../directives'

@Component()
export default class extends HTMLElement {
  static tagName = 'o-login'

  private step = 1
  @Binding() email: string

  render({ onSubmit, step }: this) {
    return html`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          height: 100vh;
        }

        form {
          flex: 1;
        }

        a {
          color: rgba(255, 255, 255, .9);
          text-transform: uppercase;
          font-size: .8em;
        }

        .form-item {
          align-items: center;
          display: flex;
          flex-direction: column;
          margin: .2em 0;
        }

        .form-item > * {
          margin: .5em 0;
        }

        .text {
          font-size: .8em;
          text-align: center;
        }
      </style>
      <o-login-banner></o-login-banner>
      <form>
        <div class="form-item" style$="${show(step === 1)}">
          <o-text-input id="email" label="Email"></o-text-input>
          <o-button on-submit="${onSubmit}" text="Log In"></o-button>
        </div>

        <div class="text" style="${show(step === 2)}">
          Check your email for a one-time PIN to log in with.
        </div>

        <div class="form-item" style="${show(step === 2)}">
          <o-text-input label="PIN" pattern="[A-Za-z0-9]{6}"></o-text-input>
          <o-button text="Log In"></o-button>
        </div>

        <div class="text">
          I didn't recognize that email or your PIN was incorrect.
        </div>

        <div class="form-item">
          <a>Create Account</a>
        </div>
      </form>
      <o-copyright></o-copyright>`
  }

  private onSubmit() {
    loginAction({ email: this.email }, present)
  }
}
