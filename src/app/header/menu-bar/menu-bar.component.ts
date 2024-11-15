import { Component } from '@angular/core';
import {NavigationTabsComponent} from './navigation-tabs/navigation-tabs.component';
import {UserMenuComponent} from './user-menu/user-menu.component';
import {HomeLinkComponent} from './home-link/home-link.component';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [
    NavigationTabsComponent,
    UserMenuComponent,
    HomeLinkComponent
  ],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent {

}
