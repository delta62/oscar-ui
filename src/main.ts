import { init } from './router'

import CategoriesComponent   from './components/categories'
import CategoryComponent     from './components/category'
import ButtonComponent       from './components/button'
import CopyrightComponent    from './components/copyright'
import LoginBannerComponent  from './components/login-banner'
import LoginComponent        from './components/login'
import RouterOutletComponent from './components/outlet'
import TextInputComponent    from './components/text-input'
import LinkComponent         from './components/link'
import HeaderComponent       from './components/header'
import NotFoundComponent     from './components/not-found'
import BallotComponent       from './components/ballot'

init(window, [
  { path: '/',       component: LoginComponent },
  { path: '/login',  component: LoginComponent },
  { path: '/ballot', component: BallotComponent },
  { path: '*',       component: NotFoundComponent }
]);

interface Component extends Function {
  tagName: string
}

[
  ButtonComponent,
  CopyrightComponent,
  LoginBannerComponent,
  LoginComponent,
  TextInputComponent,
  NotFoundComponent,
  CategoryComponent,
  CategoriesComponent,
  BallotComponent,
  HeaderComponent,
  LinkComponent,
  RouterOutletComponent
].forEach(c => {
  window.customElements.define(c.tagName, c)
})
