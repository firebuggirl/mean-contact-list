import { Component, OnInit, isDevMode } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';



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

   constructor(
    private router: Router,
    public auth: AuthService,
    ) {}


  ngOnInit() {

    if (isDevMode()) {
      console.log('👋 Development!');
    } else {
      console.log('💪 Production!');
    }
}



}
