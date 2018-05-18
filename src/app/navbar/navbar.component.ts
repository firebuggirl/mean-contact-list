import { Component, OnInit, isDevMode } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
    .active {
      background: lightgray;
    }
  `]
})
export class NavbarComponent implements OnInit{


  public isCollapsed = true;

  ngOnInit() {
   if (isDevMode()) {
     console.log('👋 Development!');
   } else {
     console.log('💪 Production!');
   }
 }


  constructor(public auth: AuthService, public http: HttpClient) {

     auth.handleAuthentication();


   }



}
