import { init } from './router'

import ButtonComponent from './components/button'
import CopyrightComponent from './components/copyright'
import LoginBannerComponent from './components/login-banner'
import LoginComponent from './components/login'
import RouterOutletComponent from './components/outlet'
import TextInputComponent from './components/text-input'
import LinkComponent from './components/link'
import NotFoundComponent from './components/not-found'
import BallotComponent from './components/ballot'

init(window, [
  { path: '/',       component: LoginComponent },
  { path: '/login',  component: LoginComponent },
  { path: '/ballot', component: BallotComponent },
  { path: '*',       component: NotFoundComponent }
]);

[
  BallotComponent,
  ButtonComponent,
  CopyrightComponent,
  LoginBannerComponent,
  LoginComponent,
  TextInputComponent,
  RouterOutletComponent,
  NotFoundComponent,
  LinkComponent
].forEach((component: any) => {
  window.customElements.define(component.tag, component)
})
