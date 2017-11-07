import { Component } from '../decorators'

@Component({
  tag: 'o-not-found',
  template: `
    <h1>Not found, bro</h1>
    <o-link href="/">Go home</o-link>
  `
})
export default class NotFoundComponent extends HTMLElement { }
