import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {filter} from 'rxjs';

interface BreadCrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-bread-crumbs',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink,
    NgClass
  ],
  templateUrl: './bread-crumbs.component.html',
  styleUrl: './bread-crumbs.component.scss'
})
export class BreadCrumbsComponent implements OnInit {
  breadCrumbs: BreadCrumb[] = [];
  staticBreadCrumbs: BreadCrumb[] = [
    {
      label: 'Back Office',
      url: '/back-office'
    },
    {
      label: 'Codes',
      url: '/codes'
    },
  ];

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.createBreadcrumbs();
    });
  }

  private createBreadcrumbs() {
    const url = this.router.url;
    const urlParts = url.split('/');
    urlParts.shift();
    let urlAccumulator = '';
    let dynamicBreadCrumbs = urlParts.map((part) => {
      urlAccumulator += `/${part}`;
      // replace dashes with spaces
      part = part.replace(/-/g, ' ');
      // and capitalize first letter of each word
      part = part.replace(/\b\w/g, (char) => char.toUpperCase());
      return {
        label: part,
        url: urlAccumulator
      };
    });

    this.breadCrumbs = [...this.staticBreadCrumbs, ...dynamicBreadCrumbs];
  }
}
