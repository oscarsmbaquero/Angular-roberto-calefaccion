import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public selectedRoute?: string;

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.selectedRoute = event.url.split('/')[1];
      }
    });

  }

}
