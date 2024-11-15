import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-navigation-tab',
  standalone: true,
  imports: [
    NgClass,
    RouterLink
  ],
  templateUrl: './navigation-tab.component.html',
  styleUrl: './navigation-tab.component.scss'
})
export class NavigationTabComponent {
  @Input() isActive = false;
  @Input() tabName = '';
  @Input() tabTitle = '';
}
