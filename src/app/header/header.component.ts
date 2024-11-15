import {Component} from '@angular/core';
import {MenuBarComponent} from './menu-bar/menu-bar.component';
import {BreadCrumbsComponent} from './bread-crumbs/bread-crumbs.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MenuBarComponent,
    BreadCrumbsComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
