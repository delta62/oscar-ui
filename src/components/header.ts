import { html } from 'lit-html'
import { Binding, Component } from '../decorators'
import { navigate } from '../router'

@Component()
export default class HeaderComponent extends HTMLElement {
  static tagName = 'o-header'

  private klass: string = 'score'
  @Binding() place: number = 0
  @Binding() score: number = 0

  render({ place, score, klass, onMenuClick, onScoreClick, onTitleClick }: this) {
    return html`
      <style>
        @import url('/src/reset.css');

        :host {
          background: black;
          border-image: linear-gradient(to right, black, var(--color-primary), black) 100% 1;
          border-style: solid;
          border-bottom-width: .2em;
          box-sizing: border-box;
          display: flex;
          height: 2.5em;
        }

        .left-content,
        .right-content {
          align-items: center;
          box-sizing: border-box;
          display: flex;
          width: 50vw;
        }

        .right-content {
          justify-content: flex-end;
        }

        .score,
        .title {
          align-items: center;
          display: flex;
          flex-direction: column;
          padding: .2em 1em;
        }

        .open-btn {
          display: flex;
          flex-direction: column;
          height: 70%;
          justify-content: space-around;
          padding: 0 1em;
        }

        .open-btn > * {
          border: solid 1px var(--color-primary-faded);
          background: var(--color-primary-faded);
          border-radius: 1px;
          width: .2em;
          height: .2em;
        }

        .score {
          background: linear-gradient(135deg, rgba(255, 255, 255, .5), rgba(255, 255, 255, .15), rgba(255, 255, 255, .1));
          border-left: 1px solid var(--color-primary-faded);
          border-right: 1px solid var(--color-primary-faded);
          position: relative;
        }

        .score > * {
          line-height: 1em;
        }

        img {
          display: none;
          height: 90%;
          left: -.5em;
          position: absolute;
          top: 5%;
        }

        .score.first img,
        .score.second img,
        .score.third img {
          display: inline-block;
        }

        .title > * {
          line-height: .9em;
        }
      </style>
      <div class="left-content">
        <div on-click="${onMenuClick}" class="open-btn">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="right-content">
        <div class$="${klass}" on-click="${onScoreClick}">
          <img src="images/oscar.svg" alt="Gold Oscar Meeple">
          <h3>${score}</h3>
          <h6>Score</h6>
        </div>
        <div class="title" on-click="${onTitleClick}">
          <h6>The</h6>
          <h5>Oscars</h5>
          <h5>Ballot</h5>
        </div>
      </div>
    `
  }

  attributeChangedCallback(name: string, oldVal: string, newVal: string) {
    if (name === 'place') {
      switch (newVal) {
        case '1':
          this.klass = 'score first'
          break
        case '2':
          this.klass = 'score second'
          break
        case '3':
          this.klass = 'score third'
          break
      }
    }
  }

  private onMenuClick() {
    console.log('menu click')
  }

  private onScoreClick() {
    navigate('/scoreboard')
  }

  private onTitleClick() {
    navigate('/ballot')
  }
}
