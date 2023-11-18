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

  constructor(private authService: AuthService, private router: Router){}
  logout(){
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
