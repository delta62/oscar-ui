import { html } from 'lit-html'
import { Binding, Component } from '../decorators'
import { Category } from './categories'

@Component()
export default class CategoryComponent extends HTMLElement {
  static tagName = 'o-category'

  @Binding() name: string = ''
  @Binding() id: string = ''
  private choicePrefix: string = 'Cast your vote for'
  private choice: string = null

  render({ choicePrefix, name, choice }: this) {
    return html`
      <style>
        @import url('/src/reset.css');

        :host {
          display: block;
        }

        .category {
          height: 10em;
          position: relative;
        }

        .text-container {
          background: rgba(0, 0, 0, .95);
          bottom: 0;
          height: 5em;
          width: 100%;
          position: absolute;
          display: flex;
          transition: background-color .2s;
        }

        .left-content,
        .right-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: .5em;
        }
      </style>
      <div class="category">
        <div class="text-container">
          <div class="left-content">
            <h4>${choicePrefix}</h4>
            <h3>${name}</h3>
            <h6 class="choice">${choice}</h6>
          </div>
          <div class="right-content">
            <div class="arrow-right"></div>
          </div>
        </div>
      </div>`
  }
}
