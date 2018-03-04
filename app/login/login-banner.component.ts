import { Component, Renderer, ElementRef, ViewChild } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'o-login-banner',
  styleUrls: [ './banner.css' ],
  template: `
    <div class='images'>
      <div class="row">
        <img src='images/a-fantastic-woman-square.jpg'/>
        <img src='images/the-insult-square.jpg'/>
        <img src='images/get-out-square.jpg'/>
        <img src='images/lady-bird-square.jpg'/>
      </div>
      <div class="row">
        <img src='images/darkest-hour-square.jpg'/>
        <img src='images/dunkirk-square.jpg'/>
        <img src='images/the-shape-of-water-square.jpg'/>
        <img src='images/call-me-by-your-name-square.jpg'/>
      </div>
      <div class="row">
        <img src='images/phantom-thread-square.jpg'/>
        <img src='images/the-post-square.jpg'/>
        <img src='images/on-body-and-soul-square.jpg'/>
        <img src='images/three-billboards-outside-ebbing-missouri-square.jpg'/>
      </div>
    </div>
    <div class='text'>
      <div class='left-content'>
        <h6>The</h6><h1>Oscars</h1>
      </div>
      <div class='right-content'>
        <h1>Ballot</h1><h6>2018</h6>
      </div>
    </div>`
})
export class LoginBannerComponent { };
