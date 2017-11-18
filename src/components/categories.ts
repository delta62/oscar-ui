import { html } from 'lit-html'
import { repeat } from 'lit-html/lib/repeat'
import { Component, Binding } from '../decorators'
import { navigate } from '../router'

export interface Category {
  id: number
  name: string
}

@Component()
export default class CategoriesComponent extends HTMLElement {
  static tagName = 'o-categories'

  @Binding() items: Array<Category> = [
    { id: 1, name: 'one' },
    { id: 2, name: 'two' },
    { id: 3, name: 'three' },
    { id: 4, name: 'four' },
    { id: 5, name: 'five' },
    { id: 6, name: 'six' },
    { id: 7, name: 'seven' },
  ]

  render({ items, onClick }: this) {
    return html`
      ${repeat(items, i => i.id, i =>
        html`<o-category on-click="${onClick}" id="${i.id}" name="${i.name}"></o-category>`)}
    `
  }

  private onClick(e: any) {
    navigate(`/ballot/${e.target.id}`)
  }
}
