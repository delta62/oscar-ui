import { Component, Renderer, ElementRef, ViewChild } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'o-login-banner',
  styleUrls: [ './banner.css' ],
  template: `
    <div class='images'>
      <div class="row">
        <img src='images/a-star-is-born-square.jpg'/>
        <img src='images/roma-square.jpg'/>
        <img src='images/green-book-square.jpg'/>
        <img src='images/black-panther-square.jpg'/>
      </div>
      <div class="row">
        <img src='images/minding-the-gap-square.jpg'/>
        <img src='images/bao-square.jpg'/>
        <img src='images/the-favourite-square.jpg'/>
        <img src='images/bohemian-rhapsody-square.jpg'/>
      </div>
      <div class="row">
        <img src='images/spider-man-into-the-spider-verse-square.jpg'/>
        <img src='images/the-ballad-of-buster-scruggs-square.jpg'/>
        <img src='images/vice-square.jpg'/>
        <img src='images/blackkklansman-square.jpg'/>
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
