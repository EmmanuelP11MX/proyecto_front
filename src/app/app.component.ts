import { Component } from '@angular/core';
import { ItemMenu, env } from 'src/config/env';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaMenu: Array<ItemMenu> = env.menu;
  title = 'proyecto_front';

  constructor() {
    
  }
}
