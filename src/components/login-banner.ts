import { Component } from '../decorators'

@Component({
  tag: 'o-login-banner',
  styles: `
    :host {
      display: block;
      margin-bottom: 2em;
    }

    .left-content,
    .right-content {
      align-items: center;
      display: inline-flex;
      flex-direction: column;
      height: 25vw;
      width: 50vw;
    }
    h6 {
      line-height: 0em;
      margin-top: 2em;
    }
    .right-content > h1 {
      line-height: 0.8em;
      margin-top: 0.9em;
    }
    .text {
      display: flex;
      width: 100vw;
      position: absolute;
      top: 25vw;
      height: 25vw;
      background-color: rgba(0, 0, 0, 0.4);
    }
    .row {
        display: flex;
        width: 100vw;
    }
    img {
        flex: 3;
        height: 25vw;
    }`,
  template: `
    <div class="images">
      <div class="row">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
      </div>
      <div class="row">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
      </div>
      <div class="row">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
      </div>
    </div>
    <div class="text">
      <div class="left-content">
        <h6>The</h6><h1>Oscars</h1>
      </div>
      <div class="right-content">
        <h1>Ballot</h1><h6>2018</h6>
      </div>
    </div>
  `
})
export default class extends HTMLElement { }
