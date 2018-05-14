import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
    .active {
      background: lightgray;
    }
  `]
})
export class NavbarComponent {

  
  public isCollapsed = true;

  constructor() { }



}
