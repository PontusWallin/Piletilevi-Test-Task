import {Component} from '@angular/core';
import {NavigationTabs} from './NavigationTabs';
import {NavigationTabComponent} from './navigation-tab/navigation-tab.component';

@Component({
  selector: 'app-navigation-tabs',
  standalone: true,
  imports: [
    NavigationTabComponent
  ],
  templateUrl: './navigation-tabs.component.html',
  styleUrl: './navigation-tabs.component.scss'
})
export class NavigationTabsComponent {
  activeTab = NavigationTabs.None;

  setActiveTab(tab: NavigationTabs) {
    this.activeTab = tab;
  }

  protected readonly NavigationTab = NavigationTabs;
}
