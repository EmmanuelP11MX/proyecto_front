import { Component } from '@angular/core';
import { ItemMenu, env } from 'src/config/env';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaMenu: Array<ItemMenu> = env.menu;
  title = 'proyecto_front';
  isLoggedIn = false;

  constructor(private authService: AuthService, private router: Router){
    this.isLoggedIn = this.authService.isUserLogin();
  }

  onLogoutClick() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
