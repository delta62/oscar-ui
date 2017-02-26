import { Component, Renderer, ElementRef, ViewChild } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'o-login-banner',
  styleUrls: [ './banner.css' ],
  template: `
    <div class='images'>
      <img src='images/arrival-square.jpg'/>
      <img src='images/fences-square.jpg'/>
      <img src='images/hacksaw-ridge-square.jpg'/>
      <img src='images/hell-or-high-water-square.jpg'/>
      <img src='images/hidden-figures-square.jpg'/>
      <img src='images/la-la-land-square.jpg'/>
      <img src='images/lion-square.jpg'/>
      <img src='images/manchester-by-the-sea-square.jpg'/>
      <img src='images/moonlight-square.jpg'/>
      <img src='images/watani-my-homeland-square.jpg'/>
      <img src='images/a-man-called-ove-square.jpg'/>
      <img src='images/tanna-square.jpg'/>
    </div>
    <div class='text'>
      <div class='left-content'>
        <h6>The</h6><h1>Oscars</h1>
      </div>
      <div class='right-content'>
        <h1>Ballot</h1><h6>2017</h6>
      </div>
    </div>`
})
export class LoginBannerComponent { };
